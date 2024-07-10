import { Global, Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { InteractionComponentService } from './interaction-component.service';
import { Telegraf } from 'telegraf';
import { ExplorerService } from '../nestgram-explorer.service';
import { InteractionComponentDiscovery } from './interaction-component.discovery';
import { InteractionComponent } from './decorators';
import { InteractionComponentType } from './interaction-component.enums';

@Global()
@Module({
  providers: [InteractionComponentService],
  exports: [InteractionComponentService],
})
export class InteractionComponentModule implements OnModuleInit, OnApplicationBootstrap {
  public constructor(
    private readonly client: Telegraf,
    private readonly explorerService: ExplorerService<InteractionComponentDiscovery>,
    private readonly interactionComponentService: InteractionComponentService,
  ) {}

  public onModuleInit() {
    return this.explorerService
      .explore(InteractionComponent.KEY)
      .forEach((component) => this.interactionComponentService.add(component));
  }

  public onApplicationBootstrap() {
    this.client.on('callback_query', (ctx) => {
      return this.interactionComponentService
        .get(InteractionComponentType.BUTTON, ctx.update.callback_query['data'])
        ?.execute(ctx) as Promise<unknown[]>;
    });
  }
}
