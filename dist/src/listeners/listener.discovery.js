"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerDiscovery = void 0;
const context_1 = require("../context");
class ListenerDiscovery extends context_1.NestGramBaseDiscovery {
    getType() {
        return this.meta.type;
    }
    getEvent() {
        return this.meta.event.toString();
    }
    isListener() {
        return true;
    }
    toJSON() {
        return this.meta;
    }
}
exports.ListenerDiscovery = ListenerDiscovery;
//# sourceMappingURL=listener.discovery.js.map