import { Context, NarrowedContext } from 'telegraf';
import { NestGramEvents } from '../listeners';
import { Update } from 'telegraf/typings/core/types/typegram';

/**
 * todo: transfer it on object for example:
 *
 * Context interface for NestGram.
 * ButtonContext : {
 *  context: Context<Update.MessageUpdate>;
 *  //... other context properties
 * }
 * MiddlewareContext : {
 *  context: Context<Update.CallbackQueryUpdate>;
 *  next: () => Promise<void>;
 * }
 */

export type TextCommandContext = [Context];
export type ButtonContext = Context<Update>;
export type MiddlewareContext = [Context<Update>, () => Promise<void>];

export type UpdateMapping = {
  message: Update.MessageUpdate;
  edited_message: Update.EditedMessageUpdate;
  channel_post: Update.ChannelPostUpdate;
  edited_channel_post: Update.EditedChannelPostUpdate;
  callback_query: Update.CallbackQueryUpdate;
  inline_query: Update.InlineQueryUpdate;
  shipping_query: Update.ShippingQueryUpdate;
  pre_checkout_query: Update.PreCheckoutQueryUpdate;
  poll: Update.PollUpdate;
  poll_answer: Update.PollAnswerUpdate;
  my_chat_member: Update.MyChatMemberUpdate;
  chat_member: Update.ChatMemberUpdate;
  chat_join_request: Update.ChatJoinRequestUpdate;
  chat_boost: Update.ChatBoostUpdate;
  removed_chat_boost: Update.RemovedChatBoostUpdate;
};

export type ContextOf<K extends keyof UpdateMapping> = [Context<UpdateMapping[K]>];
