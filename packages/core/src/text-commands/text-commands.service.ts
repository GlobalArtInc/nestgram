import { Injectable, Logger } from '@nestjs/common';
import { TextCommandDiscovery } from './text-commands.discovery';

/**
 * Service that manages text commands.
 */
@Injectable()
export class TextCommandsService {
  private readonly logger = new Logger(TextCommandsService.name);

  public readonly cache = new Map<string, TextCommandDiscovery>();

  public add(command: TextCommandDiscovery) {
    const name = command.getName();

    if (this.cache.has(name)) {
      this.logger.warn(`Command : ${name} already exists`);
    }

    this.cache.set(name, command);
  }

  public get(name: string) {
    return this.cache.get(name);
  }

  public remove(name: string) {
    this.cache.delete(name);
  }
}
