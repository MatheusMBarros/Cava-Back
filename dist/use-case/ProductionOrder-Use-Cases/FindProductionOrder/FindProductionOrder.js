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
exports.FindProductionOrder = void 0;
class FindProductionOrder {
    constructor(productionOrderRepository) {
        this.productionOrderRepository = productionOrderRepository;
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productionOrder = yield this.productionOrderRepository.show(id);
                return productionOrder;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.FindProductionOrder = FindProductionOrder;
//# sourceMappingURL=FindProductionOrder.js.map