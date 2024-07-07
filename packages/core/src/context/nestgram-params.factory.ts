import { ParamsFactory } from '@nestjs/core/helpers/external-context-creator';
import { NestGramParamType } from './nestgram-paramtype.enum';
import { NestGramBaseDiscovery } from '.';
import { ParamData } from '@nestjs/common';

export class NestGramParamsFactory implements ParamsFactory {
  public exchangeKeyForValue(type: number, data: ParamData, args: [Array<unknown>, NestGramBaseDiscovery]) {
    if (!args) {
      return null;
    }
    switch (type as NestGramParamType) {
      case NestGramParamType.CONTEXT:
        return args[0];
      case NestGramParamType.DISCOVERY:
        return args[1];
      default:
        return null;
    }
  }
}
