import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NestGramExecutionContext } from '../../context';
import { InteractionComponentType } from '../interaction-component.enums';
import { Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { Deunionize } from 'telegraf/typings/core/helpers/deunionize';

/**
 * Represents a component param decorator.
 * @param data The data.
 * @returns The component param decorator.
 */
export const ComponentParam = createParamDecorator((data, ctx: ExecutionContext) => {
  const nestgramContext = NestGramExecutionContext.create(ctx);
  const context = ctx.getArgByIndex(0) as Context<Deunionize<Update>>;
  const discovery = nestgramContext.getDiscovery();

  if (!discovery.isInteractionComponent() ) {
    return null;
  }
  const match = discovery.matcher([InteractionComponentType.BUTTON, context.update.callback_query?.['data']].join('_'));
  if (!match) {
    return null;
  }

  return data ? match.params[data] : match.params;
});
