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
exports.FindMoldPieceController = void 0;
const FindMoldPiece_1 = require("./FindMoldPiece");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const PrismaMoldPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldPieceRepository");
class FindMoldPieceController {
    constructor() {
        this.findMoldPiece = new FindMoldPiece_1.FindMoldPiece(new PrismaMoldPieceRepository_1.PrismaMoldPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const moldPiece = yield this.findMoldPiece.read(Number(id));
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
exports.FindMoldPieceController = FindMoldPieceController;
//# sourceMappingURL=FindMoldPieceController.js.map