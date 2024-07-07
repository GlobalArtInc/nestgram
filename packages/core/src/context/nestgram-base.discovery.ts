import { Reflector } from '@nestjs/core';
import { ListenerDiscovery } from '../listeners';

interface DiscoveredItem {
  class: new (...args: unknown[]) => unknown;
  handler?: (...args: unknown[]) => void;
}

export abstract class NestGramBaseDiscovery<T = unknown> {
  protected readonly reflector = new Reflector();

  protected discovery: DiscoveredItem;

  protected contextCallback: (context: unknown, discovery: NestGramBaseDiscovery<T>) => unknown;

  public constructor(public meta: T) {}

  public getClass() {
    return this.discovery?.class;
  }

  public getHandler() {
    return this.discovery?.handler;
  }

  public setDiscoveryMeta(meta: DiscoveredItem) {
    this.discovery ||= meta;
  }

  public setContextCallback(fn: (context: unknown, discovery: NestGramBaseDiscovery<T>) => unknown) {
    this.contextCallback ||= fn;
  }

  public execute(context: unknown = []) {
    return this.contextCallback(context, this);
  }

  public isListener(): this is ListenerDiscovery {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public abstract toJSON(): Record<string, any>;
}
