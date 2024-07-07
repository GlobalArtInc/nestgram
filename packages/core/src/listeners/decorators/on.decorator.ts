import { NestGramEvents } from '../listener.interfaces';
import 'reflect-metadata';
import { Listener } from './listener.decorator';

/**
 * Decorator that marks a method as a listener for telegraf client.
 * @param events - The event or events names.
 * @returns The decorated method.
 */
export const On = <E extends NestGramEvents>(event: E) => Listener({ type: 'on', event });
