import { NestGramParamType } from '../nestgram-paramtype.enum';
import { createNestGramParamDecorator } from './params.util';

/**
 * Context decorator that marks a argument as a context.
 * This decorator is used to retrieve the context.
 * @returns The decorated argument.
 */
export const Context = createNestGramParamDecorator(NestGramParamType.CONTEXT);

export const Ctx = Context;
