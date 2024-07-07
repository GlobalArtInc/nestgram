"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCommandDiscovery = void 0;
const context_1 = require("../context");
class TextCommandDiscovery extends context_1.NestGramBaseDiscovery {
    getName() {
        return this.meta.name;
    }
    getDescription() {
        return this.meta.description;
    }
    isTextCommand() {
        return true;
    }
    toJSON() {
        return this.meta;
    }
}
exports.TextCommandDiscovery = TextCommandDiscovery;
//# sourceMappingURL=text-commands.discovery.js.map