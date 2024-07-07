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
exports.ListenersModule = void 0;
const common_1 = require("@nestjs/common");
const telegraf_1 = require("telegraf");
const CustomListeners = require("./handlers");
const core_1 = require("@nestjs/core");
const nestgram_explorer_service_1 = require("../nestgram-explorer.service");
const decorators_1 = require("./decorators");
const { BaseHandler, ...listeners } = CustomListeners;
let ListenersModule = class ListenersModule {
    constructor(client, explorerService) {
        this.client = client;
        this.explorerService = explorerService;
    }
    onModuleInit() {
        const explorer = this.explorerService.explore(decorators_1.Listener.KEY);
        explorer.forEach((listener) => {
            const eventType = listener.getType();
            const event = listener.getEvent();
            this.client[eventType](event, (...args) => listener.execute(args));
        });
    }
};
exports.ListenersModule = ListenersModule;
exports.ListenersModule = ListenersModule = __decorate([
    (0, common_1.Module)({
        imports: [core_1.DiscoveryModule],
        providers: Object.values(listeners),
    }),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        nestgram_explorer_service_1.ExplorerService])
], ListenersModule);
//# sourceMappingURL=listeners.module.js.map