import { Reflector } from '@nestjs/core';
import { MiddlewareDiscovery } from '../middleware.discovery';

/**
 * Decorator that marks a method as a text command for telegraf client.
 * @param options The options for the text command.
 */
export const Middleware = Reflector.createDecorator<unknown, MiddlewareDiscovery>({
  transform: (options: unknown) => new MiddlewareDiscovery(options),
});
