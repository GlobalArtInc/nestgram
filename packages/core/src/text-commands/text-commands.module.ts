import { Global, Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { TextCommandsService } from './text-commands.service';
import { ExplorerService } from '../nestgram-explorer.service';
import { TextCommandDiscovery } from './text-commands.discovery';
import { TextCommand } from './decorators';
import { Telegraf } from 'telegraf';

@Global()
@Module({
  providers: [TextCommandsService],
  exports: [TextCommandsService],
})
export class TextCommandsModule implements OnModuleInit, OnApplicationBootstrap {
  constructor(
    private readonly explorerService: ExplorerService<TextCommandDiscovery>,
    private readonly textCommandsService: TextCommandsService,
    private readonly client: Telegraf,
  ) {}

  onModuleInit() {
    this.explorerService.explore(TextCommand.KEY).forEach((command) => this.textCommandsService.add(command));
  }

  public onApplicationBootstrap() {
    this.textCommandsService.cache.forEach((command) => {
      const commandName = command.getName();
      this.client.command(commandName, async (context) => {
        const discovery = this.textCommandsService.get(commandName);
        if (discovery) {
          return discovery.execute({ context, discovery });
        }
      });
    });
  }
}
