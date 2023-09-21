"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5555;
console.log(port);
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map