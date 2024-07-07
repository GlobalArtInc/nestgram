"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCommand = void 0;
const text_commands_discovery_1 = require("../text-commands.discovery");
const core_1 = require("@nestjs/core");
exports.TextCommand = core_1.Reflector.createDecorator({
    transform: (options) => new text_commands_discovery_1.TextCommandDiscovery(options),
});
//# sourceMappingURL=command.decorator.js.map