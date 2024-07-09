import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NestGramExecutionContext, TextCommandContext } from '../../context';
import { Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { Deunionize } from 'telegraf/typings/core/helpers/deunionize';

/**
 * Represents an arguments param decorator.
 * @returns The arguments param decorator.
 */
export const Arguments = createParamDecorator((_, context: ExecutionContext) => {
  const nestcordContext = NestGramExecutionContext.create(context);
  const [ctx] = nestcordContext.getContext<TextCommandContext>() as [Context<Deunionize<Update>>];
  const discovery = nestcordContext.getDiscovery();

  if (!discovery.isTextCommand()) {
    return null;
  }

  return ctx.update.message['text'].split(/ +/g).slice(1);
});

export const Args = Arguments;
