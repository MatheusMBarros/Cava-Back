"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prismaInstance;
prismaInstance = new client_1.PrismaClient();
exports.default = prismaInstance;
//# sourceMappingURL=PrismaSingletonInstance.js.map