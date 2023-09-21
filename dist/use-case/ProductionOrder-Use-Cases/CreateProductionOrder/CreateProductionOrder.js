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
exports.CreateProductionOrder = void 0;
class CreateProductionOrder {
    constructor(productionOrderRepository) {
        this.productionOrderRepository = productionOrderRepository;
    }
    create({ initial_counter, final_counter, created_at, updated_at, mold_fk, employee_fk, description, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productionOrder = {
                    initial_counter,
                    final_counter,
                    created_at,
                    updated_at,
                    mold_fk,
                    employee_fk,
                    description,
                };
                const lastOrder = yield this.productionOrderRepository.lastOrder();
                if (final_counter < initial_counter) {
                    throw new Error("Final counter must be greater than initial counter.");
                }
                if (lastOrder) {
                    if (initial_counter != lastOrder.final_counter) {
                        throw new Error("Initial counter must be the same last order final counter.");
                    }
                    if (!lastOrder) {
                        this.productionOrderRepository.create(productionOrder);
                    }
                }
                yield this.productionOrderRepository.create(productionOrder);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CreateProductionOrder = CreateProductionOrder;
//# sourceMappingURL=CreateProductionOrder.js.map