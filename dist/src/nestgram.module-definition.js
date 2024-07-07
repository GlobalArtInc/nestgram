"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NESTGRAM_ASYNC_OPTIONS_TYPE = exports.NESTGRAM_OPTIONS_TYPE = exports.NESTGRAM_MODULE_OPTIONS = exports.ConfigurableModuleClass = void 0;
const common_1 = require("@nestjs/common");
_a = new common_1.ConfigurableModuleBuilder()
    .setClassMethodName('forRoot')
    .setFactoryMethodName('createNestGramOptions')
    .build(), exports.ConfigurableModuleClass = _a.ConfigurableModuleClass, exports.NESTGRAM_MODULE_OPTIONS = _a.MODULE_OPTIONS_TOKEN, exports.NESTGRAM_OPTIONS_TYPE = _a.OPTIONS_TYPE, exports.NESTGRAM_ASYNC_OPTIONS_TYPE = _a.ASYNC_OPTIONS_TYPE;
//# sourceMappingURL=nestgram.module-definition.js.map