import { Global, Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { ExplorerService } from '../nestgram-explorer.service';
import { MiddlewareDiscovery } from './middleware.discovery';
import { Telegraf } from 'telegraf';
import { Middleware } from './decorators';

@Global()
@Module({
  imports: [],
})
export class MiddlewareModule implements OnModuleInit {
  constructor(
    private readonly explorerService: ExplorerService<MiddlewareDiscovery>,
    // private readonly textCommandsService: TextCommandsService,
    private readonly client: Telegraf,
  ) {}

  onModuleInit() {
    const explorer = this.explorerService.explore(Middleware.KEY);

    explorer.forEach((middleware) => {
      this.client.use(async (ctx, next) => middleware.execute([ctx, next]));
    });
  }
}
