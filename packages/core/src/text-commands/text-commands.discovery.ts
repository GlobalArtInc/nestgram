import { NestGramBaseDiscovery } from '../context';

export interface CommandMeta {
  name: string;
  description: string;
}

/**
 * Represents a text command discovery.
 */
export class TextCommandDiscovery extends NestGramBaseDiscovery<CommandMeta> {
  public getName() {
    return this.meta.name;
  }

  public getDescription() {
    return this.meta.description;
  }

  public isTextCommand(): this is TextCommandDiscovery {
    return true;
  }

  public override toJSON(): Record<string, any> {
    return this.meta;
  }
}
