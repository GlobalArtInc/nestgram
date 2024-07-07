import { Context } from 'telegraf';
import { NestGramEvents } from '../listeners';

export type CommandContext = [Context];

export type ContextOf<K extends keyof E, E = NestGramEvents> = [Context, E[K]];
