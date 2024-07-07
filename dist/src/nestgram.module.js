"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestGramModule = void 0;
const common_1 = require("@nestjs/common");
const nestgram_module_definition_1 = require("./nestgram.module-definition");
const telegraf_1 = require("telegraf");
const ProvidersMap = require("./providers");
const listeners_module_1 = require("./listeners/listeners.module");
const nestgram_explorer_service_1 = require("./nestgram-explorer.service");
const core_1 = require("@nestjs/core");
const text_commands_1 = require("./text-commands");
const Providers = Object.values(ProvidersMap);
let NestGramModule = class NestGramModule extends nestgram_module_definition_1.ConfigurableModuleClass {
    constructor(client) {
        super();
        this.client = client;
    }
    onApplicationBootstrap() {
        this.client.launch();
    }
    onApplicationShutdown(signal) {
        this.client.stop(signal);
    }
};
exports.NestGramModule = NestGramModule;
exports.NestGramModule = NestGramModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [core_1.DiscoveryModule, text_commands_1.TextCommandsModule, listeners_module_1.ListenersModule],
        providers: [nestgram_explorer_service_1.ExplorerService, ...Providers],
        exports: [listeners_module_1.ListenersModule, text_commands_1.TextCommandsModule, nestgram_explorer_service_1.ExplorerService, ...Providers],
    }),
    __metadata("design:paramtypes", [telegraf_1.Telegraf])
], NestGramModule);
//# sourceMappingURL=nestgram.module.js.map