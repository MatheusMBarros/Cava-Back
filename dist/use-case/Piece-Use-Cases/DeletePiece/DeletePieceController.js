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
exports.DeletePieceController = void 0;
const PrismaPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaPieceRepository");
const DeletePiece_1 = require("./DeletePiece");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
class DeletePieceController {
    constructor() {
        this.deletePiece = new DeletePiece_1.DeletePiece(new PrismaPieceRepository_1.PrismaPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                yield this.deletePiece.delete(Number(id));
                return res.status(200).send();
            }
            catch (error) {
                return res.send(error.message);
            }
        });
    }
}
exports.DeletePieceController = DeletePieceController;
//# sourceMappingURL=DeletePieceController.js.map