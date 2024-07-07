"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestGramParamsFactory = void 0;
const nestgram_paramtype_enum_1 = require("./nestgram-paramtype.enum");
class NestGramParamsFactory {
    exchangeKeyForValue(type, data, args) {
        if (!args) {
            return null;
        }
        switch (type) {
            case nestgram_paramtype_enum_1.NestGramParamType.CONTEXT:
                return args[0];
            case nestgram_paramtype_enum_1.NestGramParamType.DISCOVERY:
                return args[1];
            default:
                return null;
        }
    }
}
exports.NestGramParamsFactory = NestGramParamsFactory;
//# sourceMappingURL=nestgram-params.factory.js.map