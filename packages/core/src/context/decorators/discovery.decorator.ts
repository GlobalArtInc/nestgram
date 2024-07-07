import { NestGramParamType } from '../nestgram-paramtype.enum';
import { createNestGramParamDecorator } from './params.util';

/**
 * Context decorator that marks a argument as a discovery.
 * This decorator is used to retrieve the discovery.
 * @returns The decorated argument.
 */
export const Discovery = createNestGramParamDecorator(NestGramParamType.DISCOVERY);
