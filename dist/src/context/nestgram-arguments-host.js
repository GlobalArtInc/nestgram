"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestGramArgumentsHost = void 0;
const execution_context_host_1 = require("@nestjs/core/helpers/execution-context-host");
class NestGramArgumentsHost extends execution_context_host_1.ExecutionContextHost {
    static create(context) {
        const type = context.getType();
        const necContext = new NestGramArgumentsHost(context.getArgs());
        necContext.setType(type);
        return necContext;
    }
    getType() {
        return super.getType();
    }
    getContext() {
        return this.getArgByIndex(0);
    }
    getDiscovery() {
        return this.getArgByIndex(1);
    }
}
exports.NestGramArgumentsHost = NestGramArgumentsHost;
//# sourceMappingURL=nestgram-arguments-host.js.map