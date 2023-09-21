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
exports.UpdateMoldController = void 0;
const UpdateMold_1 = require("./UpdateMold");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const PrismaMoldRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldRepository");
class UpdateMoldController {
    constructor() {
        this.updateMold = new UpdateMold_1.UpdateMold(new PrismaMoldRepository_1.PrismaMoldRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, total_weight, channel_return_weight, channel_lost_percentage, } = req.body;
            const { id } = req.params;
            try {
                yield this.updateMold.update({
                    mold_id: Number(id),
                    name,
                    total_weight,
                    channel_return_weight,
                    channel_lost_percentage,
                });
                return res.status(200).json({ message: "Mold updated" });
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.UpdateMoldController = UpdateMoldController;
//# sourceMappingURL=UpdateMoldController.js.map