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
exports.DeleteEmployeeController = void 0;
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const DeleteEmployee_1 = require("./DeleteEmployee");
const PrismaEmployeeRepository_1 = require("@/repositories/PrismaRepository/PrismaEmployeeRepository");
class DeleteEmployeeController {
    constructor() {
        this.deleteEmployee = new DeleteEmployee_1.DeleteEmployee(new PrismaEmployeeRepository_1.PrismaEmployeeRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.deleteEmployee.delete(Number(id));
                return res.status(200).send();
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.DeleteEmployeeController = DeleteEmployeeController;
//# sourceMappingURL=DeleteEmployeeController.js.map