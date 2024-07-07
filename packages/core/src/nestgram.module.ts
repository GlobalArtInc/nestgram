import { Global, Inject, Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { ConfigurableModuleClass, NESTGRAM_MODULE_OPTIONS } from './nestgram.module-definition';
import { NestGramModuleOptions } from './nestgram-options.interface';
import { Telegraf } from 'telegraf';
import * as ProvidersMap from './providers';
import { ListenersModule } from './listeners/listeners.module';
import { ExplorerService } from './nestgram-explorer.service';
import { DiscoveryModule } from '@nestjs/core';
import { TextCommandsModule } from './text-commands';

const Providers = Object.values(ProvidersMap);

@Global()
@Module({
  imports: [DiscoveryModule, TextCommandsModule, ListenersModule],
  providers: [ExplorerService, ...Providers],
  exports: [ListenersModule, TextCommandsModule, ExplorerService, ...Providers],
})
export class NestGramModule extends ConfigurableModuleClass implements OnApplicationBootstrap, OnApplicationShutdown {
  public constructor(private readonly client: Telegraf) {
    super();
  }

  onApplicationBootstrap() {
    this.client.launch();
  }

  onApplicationShutdown(signal?: string) {
    this.client.stop(signal);
  }
}
