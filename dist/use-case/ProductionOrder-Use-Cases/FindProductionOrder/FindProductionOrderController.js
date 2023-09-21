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
exports.FindProductionOrderController = void 0;
const PrismaProductionOrderRepository_1 = require("@/repositories/PrismaRepository/PrismaProductionOrderRepository");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const FindProductionOrder_1 = require("./FindProductionOrder");
class FindProductionOrderController {
    constructor() {
        this.findProductionOrder = new FindProductionOrder_1.FindProductionOrder(new PrismaProductionOrderRepository_1.PrismaProductionOrderRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const productionOrder = yield this.findProductionOrder.show(Number(id));
                return res.status(200).json(productionOrder);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.FindProductionOrderController = FindProductionOrderController;
//# sourceMappingURL=FindProductionOrderController.js.map