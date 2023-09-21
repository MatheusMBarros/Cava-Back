"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadEmployeeController = void 0;
const ReadEmployee_1 = require("./ReadEmployee");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const PrismaEmployeeRepository_1 = require("@/repositories/PrismaRepository/PrismaEmployeeRepository");
class ReadEmployeeController {
    constructor() {
        this.readEmployee = new ReadEmployee_1.ReadEmployee(new PrismaEmployeeRepository_1.PrismaEmployeeRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const employee = yield this.readEmployee.read(Number(id));
                return res.status(200).json(employee);
            }
            catch (error) {
                return res
                    .status(400)
                    .json({ message: error.message || "Unexpected error." });
            }
        });
    }
}
exports.ReadEmployeeController = ReadEmployeeController;
//# sourceMappingURL=ReadEmployeeController.js.map