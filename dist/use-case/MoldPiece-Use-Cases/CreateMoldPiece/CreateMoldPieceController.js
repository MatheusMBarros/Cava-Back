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
exports.CreateMoldPieceController = void 0;
const CreateMoldPiece_1 = require("./CreateMoldPiece");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const PrismaMoldPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldPieceRepository");
class CreateMoldPieceController {
    constructor() {
        this.createMoldPiece = new CreateMoldPiece_1.CreateMoldPiece(new PrismaMoldPieceRepository_1.PrismaMoldPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mold_fk, piece_fk, cavity } = req.body;
            try {
                yield this.createMoldPiece.create({
                    mold_fk,
                    piece_fk,
                    cavity,
                });
                return res.status(201).send();
            }
            catch (err) {
                return res.status(400).json({
                    message: err.message || "Unexpected error.",
                });
            }
        });
    }
}
exports.CreateMoldPieceController = CreateMoldPieceController;
//# sourceMappingURL=CreateMoldPieceController.js.map