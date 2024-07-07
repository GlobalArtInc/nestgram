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
exports.TextCommandsModule = void 0;
const common_1 = require("@nestjs/common");
const text_commands_service_1 = require("./text-commands.service");
const nestgram_explorer_service_1 = require("../nestgram-explorer.service");
const decorators_1 = require("./decorators");
const telegraf_1 = require("telegraf");
let TextCommandsModule = class TextCommandsModule {
    constructor(explorerService, textCommandsService, client) {
        this.explorerService = explorerService;
        this.textCommandsService = textCommandsService;
        this.client = client;
    }
    onModuleInit() {
        this.explorerService.explore(decorators_1.TextCommand.KEY).forEach((command) => this.textCommandsService.add(command));
    }
    onApplicationBootstrap() {
        this.client.on('message', async (ctx) => {
            if (!ctx.message) {
                return;
            }
            const content = ctx.message['text'].trim().toLowerCase();
            if (content.charAt(0) !== '/') {
                return;
            }
            const args = content.split(/ +/g);
            const cmd = args.shift()?.substring(1);
            if (!cmd) {
                return;
            }
            return this.textCommandsService.get(cmd)?.execute([ctx]);
        });
    }
};
exports.TextCommandsModule = TextCommandsModule;
exports.TextCommandsModule = TextCommandsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [text_commands_service_1.TextCommandsService],
        exports: [text_commands_service_1.TextCommandsService],
    }),
    __metadata("design:paramtypes", [nestgram_explorer_service_1.ExplorerService,
        text_commands_service_1.TextCommandsService,
        telegraf_1.Telegraf])
], TextCommandsModule);
//# sourceMappingURL=text-commands.module.js.map