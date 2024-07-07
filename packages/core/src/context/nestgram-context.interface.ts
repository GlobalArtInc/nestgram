import { NestGramEvents } from '../listeners';

export type ContextOf<K extends keyof E, E = NestGramEvents> = E[K];
