import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { ArgumentsHost } from '@nestjs/common';
import { NestGramContextType } from './nestgram-execution-context';
import { NestGramBaseDiscovery } from '.';
import { ContextOf, UpdateMapping } from './nestgram-context.interface';
import { NestGramEvents } from '../listeners';

export class NestGramArgumentsHost extends ExecutionContextHost {
  public static create(context: ArgumentsHost): NestGramArgumentsHost {
    const type = context.getType();
    const necContext = new NestGramArgumentsHost(context.getArgs());
    necContext.setType(type);
    return necContext;
  }

  public getType<TContext extends string = NestGramContextType>(): TContext {
    return super.getType();
  }

  public getContext<T extends keyof UpdateMapping>(): ContextOf<T>;
  public getContext<T>(): T;
  public getContext<T extends keyof UpdateMapping>(): ContextOf<T> {
    return this.getArgByIndex(0);
  }

  public getDiscovery(): NestGramBaseDiscovery {
    return this.getArgByIndex(1);
  }
}
