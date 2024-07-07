"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ctx = exports.Context = void 0;
const nestgram_paramtype_enum_1 = require("../nestgram-paramtype.enum");
const params_util_1 = require("./params.util");
exports.Context = (0, params_util_1.createNestGramParamDecorator)(nestgram_paramtype_enum_1.NestGramParamType.CONTEXT);
exports.Ctx = exports.Context;
//# sourceMappingURL=context.decorator.js.map