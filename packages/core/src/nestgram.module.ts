import { Global, Inject, Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { ConfigurableModuleClass, NESTGRAM_MODULE_OPTIONS } from './nestgram.module-definition';
import { NestGramModuleOptions } from './nestgram-options.interface';
import { Telegraf } from 'telegraf';
import * as ProvidersMap from './providers';
import { ListenersModule } from './listeners/listeners.module';

const Providers = Object.values(ProvidersMap);

@Global()
@Module({
  imports: [ListenersModule],
  providers: [...Providers],
  exports: [ListenersModule, ...Providers],
})
export class NestGramModule extends ConfigurableModuleClass implements OnApplicationBootstrap, OnApplicationShutdown {
  public constructor(
    private readonly client: Telegraf,
  ) {
    super();
  }

  onApplicationBootstrap() {
    this.client.launch();
  }

  onApplicationShutdown(signal?: string) {
    this.client.stop(signal);
  }
}
