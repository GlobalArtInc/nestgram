import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NestGramExecutionContext, TextCommandContext } from '../../context';
import { Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { Deunionize } from 'telegraf/typings/core/helpers/deunionize';

/**
 * Represents an arguments param decorator.
 * @returns The arguments param decorator.
 */
export const Arguments = createParamDecorator((_, executionContext: ExecutionContext) => {
  const nestgramContext = NestGramExecutionContext.create(executionContext);
  const { context, discovery } = nestgramContext.getContext<TextCommandContext>();

  if (!discovery.isTextCommand()) {
    return null;
  }

  return context.update.message['text'].split(/ +/g).slice(1);
});

export const Args = Arguments;
