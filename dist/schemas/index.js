"use strict";
// To help typescript find the type
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
};
//# sourceMappingURL=index.js.map