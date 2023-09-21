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
exports.CreateProductionOrderController = void 0;
const PrismaProductionOrderRepository_1 = require("@/repositories/PrismaRepository/PrismaProductionOrderRepository");
const CreateProductionOrder_1 = require("./CreateProductionOrder");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
class CreateProductionOrderController {
    constructor() {
        this.createProductionOrder = new CreateProductionOrder_1.CreateProductionOrder(new PrismaProductionOrderRepository_1.PrismaProductionOrderRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { created_at, updated_at, initial_counter, final_counter, employee_fk, mold_fk, description, } = req.body;
            try {
                yield this.createProductionOrder.create({
                    created_at,
                    updated_at,
                    initial_counter,
                    final_counter,
                    employee_fk,
                    mold_fk,
                    description,
                });
                return res.status(201).send();
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.CreateProductionOrderController = CreateProductionOrderController;
//# sourceMappingURL=CreateProductionOrderController.js.map