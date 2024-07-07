"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientProvider = void 0;
const telegraf_1 = require("telegraf");
const nestgram_module_definition_1 = require("../nestgram.module-definition");
exports.ClientProvider = {
    provide: telegraf_1.Telegraf,
    useFactory: (options) => new telegraf_1.Telegraf(options.token),
    inject: [nestgram_module_definition_1.NESTGRAM_MODULE_OPTIONS],
};
//# sourceMappingURL=client.provider.js.map