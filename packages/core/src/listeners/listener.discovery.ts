import { NestGramBaseDiscovery } from '../context';

export interface ListenerMeta {
  type: 'on';
  event: string;
}

/**
 * Represents a listener discovery.
 */
export class ListenerDiscovery extends NestGramBaseDiscovery<ListenerMeta> {
  public getType() {
    return this.meta.type;
  }

  public getEvent() {
    return this.meta.event.toString();
  }

  public isListener(): this is ListenerDiscovery {
    return true;
  }

  public override toJSON(): ListenerMeta {
    return this.meta;
  }
}
