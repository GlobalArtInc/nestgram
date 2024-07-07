"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestGramParamDecorator = createNestGramParamDecorator;
const common_1 = require("@nestjs/common");
const constants_1 = require("@nestjs/common/constants");
function createNestGramParamDecorator(type) {
    return (...pipes) => (target, key, index) => {
        const args = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, target.constructor, key) || {};
        Reflect.defineMetadata(constants_1.ROUTE_ARGS_METADATA, (0, common_1.assignMetadata)(args, type, index, undefined, ...pipes), target.constructor, key);
    };
}
//# sourceMappingURL=params.util.js.map