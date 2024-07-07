"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
const listener_discovery_1 = require("../listener.discovery");
const core_1 = require("@nestjs/core");
exports.Listener = core_1.Reflector.createDecorator({
    transform: (options) => new listener_discovery_1.ListenerDiscovery(options),
});
//# sourceMappingURL=listener.decorator.js.map