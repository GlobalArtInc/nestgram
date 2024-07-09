import { TextCommandDiscovery, CommandMeta } from '../text-commands.discovery';
import { Reflector } from '@nestjs/core';

/**
 * Decorator that marks a method as a text command for telegraf client.
 * @param options The options for the text command.
 */
export const TextCommand = Reflector.createDecorator<CommandMeta, TextCommandDiscovery>({
  transform: (options: CommandMeta) => new TextCommandDiscovery(options),
});
