import { ConfigurableModuleBuilder } from '@nestjs/common';
import { NestGramModuleOptions } from './nestgram-options.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: NESTGRAM_MODULE_OPTIONS,
  OPTIONS_TYPE: NESTGRAM_OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE: NESTGRAM_ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<NestGramModuleOptions>()
  .setClassMethodName('forRoot')
  .setFactoryMethodName('createNestGramOptions')
  .build();
