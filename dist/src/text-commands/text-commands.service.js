"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TextCommandsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCommandsService = void 0;
const common_1 = require("@nestjs/common");
let TextCommandsService = TextCommandsService_1 = class TextCommandsService {
    constructor() {
        this.logger = new common_1.Logger(TextCommandsService_1.name);
        this.cache = new Map();
    }
    add(command) {
        const name = command.getName();
        if (this.cache.has(name)) {
            this.logger.warn(`Command : ${name} already exists`);
        }
        this.cache.set(name, command);
    }
    get(name) {
        return this.cache.get(name);
    }
    remove(name) {
        this.cache.delete(name);
    }
};
exports.TextCommandsService = TextCommandsService;
exports.TextCommandsService = TextCommandsService = TextCommandsService_1 = __decorate([
    (0, common_1.Injectable)()
], TextCommandsService);
//# sourceMappingURL=text-commands.service.js.map