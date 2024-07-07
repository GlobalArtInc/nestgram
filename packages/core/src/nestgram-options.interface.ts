import { Context, Telegraf } from 'telegraf';

/**
 * The NestGram module options.
 */
export interface NestGramModuleOptions extends Partial<Telegraf.Options<Context>> {
  /**
   * Bot token: it is used to authenticate as your bot.
   */
  token: string;
}
