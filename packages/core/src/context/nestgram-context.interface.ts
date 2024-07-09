import { Context } from 'telegraf';
import { NestGramEvents } from '../listeners';
import { Update } from 'telegraf/typings/core/types/typegram';

export type TextCommandContext = [Context];
export type ButtonContext = Context<Update>;

export type ContextOf<K extends keyof E, E = NestGramEvents> = [Context, E[K]];
