import { MiddlewareContext, NestGramBaseDiscovery } from '../context';

export interface MiddlewareMeta {
  name: string;
}

export class MiddlewareDiscovery extends NestGramBaseDiscovery<unknown> {
  public execute([ctx, next]: MiddlewareContext) {
    return super.execute([ctx, next]);
  }

  public toJSON(): Record<string, any> {
    return this.meta;
  }
}
