"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestGramBaseDiscovery = void 0;
const core_1 = require("@nestjs/core");
class NestGramBaseDiscovery {
    constructor(meta) {
        this.meta = meta;
        this.reflector = new core_1.Reflector();
    }
    getClass() {
        return this.discovery?.class;
    }
    getHandler() {
        return this.discovery?.handler;
    }
    setDiscoveryMeta(meta) {
        this.discovery ||= meta;
    }
    setContextCallback(fn) {
        this.contextCallback ||= fn;
    }
    execute(context = []) {
        return this.contextCallback(context, this);
    }
    isListener() {
        return false;
    }
    isTextCommand() {
        return false;
    }
}
exports.NestGramBaseDiscovery = NestGramBaseDiscovery;
//# sourceMappingURL=nestgram-base.discovery.js.map