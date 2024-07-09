import { InteractionComponentDiscovery, InteractionComponentMeta } from '../interaction-component.discovery';
import { Reflector } from '@nestjs/core';

/**
 * Decorator that marks a method as a text command for telegraf client.
 * @param options The options for the text command.
 */
export const InteractionComponent = Reflector.createDecorator<InteractionComponentMeta, InteractionComponentDiscovery>({
  transform: (options: InteractionComponentMeta) => new InteractionComponentDiscovery(options),
});
