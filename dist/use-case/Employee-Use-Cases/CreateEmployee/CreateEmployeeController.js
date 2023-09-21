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
exports.CreateEmployeeController = void 0;
const CreateEmployee_1 = require("./CreateEmployee");
const PrismaEmployeeRepository_1 = require("@/repositories/PrismaRepository/PrismaEmployeeRepository");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
class CreateEmployeeController {
    constructor() {
        this.createEmployee = new CreateEmployee_1.CreateEmployee(new PrismaEmployeeRepository_1.PrismaEmployeeRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, sector, password } = req.body;
                const employee = {
                    name,
                    sector,
                    password,
                };
                yield this.createEmployee.create(employee);
                return res.status(201).send();
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Something went wrong",
                });
            }
        });
    }
}
exports.CreateEmployeeController = CreateEmployeeController;
//# sourceMappingURL=CreateEmployeeController.js.map