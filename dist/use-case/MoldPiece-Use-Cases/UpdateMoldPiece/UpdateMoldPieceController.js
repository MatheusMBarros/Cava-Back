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
exports.UpdateMoldPieceController = void 0;
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const UpdateMoldPiece_1 = require("./UpdateMoldPiece");
const PrismaMoldPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldPieceRepository");
class UpdateMoldPieceController {
    constructor() {
        this.updateMoldPiece = new UpdateMoldPiece_1.UpdateMoldPiece(new PrismaMoldPieceRepository_1.PrismaMoldPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { mold_fk, piece_fk, cavity } = req.body;
            try {
                const moldPiece = yield this.updateMoldPiece.update({
                    mold_piece_id: Number(id),
                    mold_fk,
                    piece_fk,
                    cavity,
                });
                return res.status(200).json(moldPiece);
            }
            catch (err) {
                return res.status(400).json({
                    message: err.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.UpdateMoldPieceController = UpdateMoldPieceController;
//# sourceMappingURL=UpdateMoldPieceController.js.map