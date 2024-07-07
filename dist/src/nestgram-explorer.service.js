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
exports.ExplorerService = void 0;
const common_1 = require("@nestjs/common");
const context_1 = require("./context");
const core_1 = require("@nestjs/core");
const external_context_creator_1 = require("@nestjs/core/helpers/external-context-creator");
const constants_1 = require("@nestjs/common/constants");
const constants_2 = require("@nestjs/core/injector/constants");
let ExplorerService = class ExplorerService extends core_1.Reflector {
    constructor(discoveryService, externalContextCreator, metadataScanner) {
        super();
        this.discoveryService = discoveryService;
        this.externalContextCreator = externalContextCreator;
        this.metadataScanner = metadataScanner;
        this.NestGramParamsFactory = new context_1.NestGramParamsFactory();
        this.wrappers = this.discoveryService.getProviders().filter((wrapper) => {
            const { instance } = wrapper;
            const prototype = instance ? Object.getPrototypeOf(instance) : null;
            return instance && prototype && wrapper.isDependencyTreeStatic();
        });
    }
    explore(metadataKey) {
        return this.flatMap((wrapper) => this.filterProperties(wrapper, metadataKey));
    }
    flatMap(callback) {
        return [...this.wrappers.flatMap(callback).filter(Boolean)];
    }
    filterProperties({ instance }, metadataKey) {
        const prototype = Object.getPrototypeOf(instance);
        return this.metadataScanner.getAllMethodNames(prototype).map((methodName) => {
            const item = this.get(metadataKey, instance[methodName]);
            if (!item) {
                return;
            }
            item.setDiscoveryMeta({ class: instance.constructor, handler: instance[methodName] });
            item.setContextCallback(this.createContextCallback(instance, prototype, methodName));
            return item;
        });
    }
    createContextCallback(instance, prototype, methodName) {
        return this.externalContextCreator.create(instance, prototype[methodName], methodName, constants_1.ROUTE_ARGS_METADATA, this.NestGramParamsFactory, constants_2.STATIC_CONTEXT, undefined, { guards: true, filters: true, interceptors: true }, 'nestgram');
    }
};
exports.ExplorerService = ExplorerService;
exports.ExplorerService = ExplorerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.DiscoveryService,
        external_context_creator_1.ExternalContextCreator,
        core_1.MetadataScanner])
], ExplorerService);
//# sourceMappingURL=nestgram-explorer.service.js.map