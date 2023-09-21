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
exports.UpdateProductionOrderController = void 0;
const UpdateProductionOrder_1 = require("./UpdateProductionOrder");
const PrismaProductionOrderRepository_1 = require("@/repositories/PrismaRepository/PrismaProductionOrderRepository");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
class UpdateProductionOrderController {
    constructor() {
        this.updateProductionOrder = new UpdateProductionOrder_1.UpdateProductionOrder(new PrismaProductionOrderRepository_1.PrismaProductionOrderRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { final_counter, initial_counter, employee_fk, updated_at, quantity, mold_fk, description, } = req.body;
            try {
                const productionOrder = yield this.updateProductionOrder.update({
                    id: Number(id),
                    final_counter,
                    initial_counter,
                    employee_fk,
                    updated_at,
                    quantity,
                    mold_fk,
                    description,
                });
                return res.status(200).json(productionOrder);
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.UpdateProductionOrderController = UpdateProductionOrderController;
//# sourceMappingURL=UpdateProductionOrderController.js.map