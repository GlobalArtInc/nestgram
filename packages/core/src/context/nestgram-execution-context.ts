import { ContextType, ExecutionContext } from '@nestjs/common';
import { NestGramArgumentsHost } from './nestgram-arguments-host';

export type NestGramContextType = 'nestgram' | ContextType;

export class NestGramExecutionContext extends NestGramArgumentsHost {
  public static create(context: ExecutionContext): NestGramExecutionContext {
    const type = context.getType();
    const necContext = new NestGramExecutionContext(context.getArgs(), context.getClass(), context.getHandler());
    necContext.setType(type);

    return necContext;
  }
}
