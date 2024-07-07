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
    this.client.on('message', async (ctx) => {
      if (!ctx.message) {
        return;
      }
      const content = ctx.message['text'].trim().toLowerCase();
      if (content.charAt(0) !== '/') {
        return;
      }

      const args = content.split(/ +/g);
      const cmd = args.shift()?.substring(1);
      if (!cmd) {
        return;
      }

      return this.textCommandsService.get(cmd)?.execute([ctx]);
    });
  }
}
