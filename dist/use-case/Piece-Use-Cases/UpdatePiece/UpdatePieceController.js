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
exports.UpdatePieceController = void 0;
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const PrismaPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaPieceRepository");
const UpdatePiece_1 = require("./UpdatePiece");
class UpdatePieceController {
    constructor() {
        this.updatePiece = new UpdatePiece_1.UpdatePiece(new PrismaPieceRepository_1.PrismaPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, handle_type, size, net_weight, gross_weight, splinter_lost_percentage, } = req.body;
                const piece = yield this.updatePiece.update({
                    id: Number(id),
                    name,
                    handle_type,
                    size,
                    net_weight,
                    gross_weight,
                    splinter_lost_percentage,
                    splinter: (gross_weight - net_weight) * splinter_lost_percentage,
                });
                return res.status(200).send(piece);
            }
            catch (error) {
                return res.send(error.message);
            }
        });
    }
}
exports.UpdatePieceController = UpdatePieceController;
//# sourceMappingURL=UpdatePieceController.js.map