"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestGramExecutionContext = void 0;
const nestgram_arguments_host_1 = require("./nestgram-arguments-host");
class NestGramExecutionContext extends nestgram_arguments_host_1.NestGramArgumentsHost {
    static create(context) {
        const type = context.getType();
        const necContext = new NestGramExecutionContext(context.getArgs(), context.getClass(), context.getHandler());
        necContext.setType(type);
        return necContext;
    }
}
exports.NestGramExecutionContext = NestGramExecutionContext;
//# sourceMappingURL=nestgram-execution-context.js.map