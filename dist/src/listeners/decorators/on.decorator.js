"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.On = void 0;
require("reflect-metadata");
const listener_decorator_1 = require("./listener.decorator");
const On = (event) => (0, listener_decorator_1.Listener)({ type: 'on', event });
exports.On = On;
//# sourceMappingURL=on.decorator.js.map