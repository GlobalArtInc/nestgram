import { Provider } from '@nestjs/common';
import { NestGramModuleOptions } from '../nestgram-options.interface';
import { Telegraf } from 'telegraf';
import { NESTGRAM_MODULE_OPTIONS } from '../nestgram.module-definition';

export const ClientProvider: Provider = {
  provide: Telegraf,
  useFactory: (options: NestGramModuleOptions) => new Telegraf(options.token),
  inject: [NESTGRAM_MODULE_OPTIONS],
};
