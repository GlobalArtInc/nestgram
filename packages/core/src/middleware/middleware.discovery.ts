import { MiddlewareContext, NestGramBaseDiscovery } from '../context';

export interface MiddlewareMeta {
  name: string;
}

export class MiddlewareDiscovery extends NestGramBaseDiscovery<unknown> {
  public execute({ context, next }: MiddlewareContext) {
    return super.execute({ context, next });
  }

  public toJSON(): Record<string, any> {
    return this.meta;
  }
}
