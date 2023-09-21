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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductionOrder = void 0;
class UpdateProductionOrder {
    constructor(productionOrderRepository) {
        this.productionOrderRepository = productionOrderRepository;
    }
    update(updateOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, final_counter, initial_counter, employee_fk, updated_at, quantity, mold_fk, description, } = updateOrder;
                const updatedOrder = yield this.productionOrderRepository.update({
                    id: Number(id),
                    final_counter,
                    initial_counter,
                    employee_fk,
                    updated_at,
                    quantity,
                    mold_fk,
                    description,
                });
                const nextOrder = yield this.productionOrderRepository.show(updateOrder.id + 1);
                nextOrder.setInitialCounter(updatedOrder.getFinalCounter());
                return updatedOrder;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.UpdateProductionOrder = UpdateProductionOrder;
//# sourceMappingURL=UpdateProductionOrder.js.map