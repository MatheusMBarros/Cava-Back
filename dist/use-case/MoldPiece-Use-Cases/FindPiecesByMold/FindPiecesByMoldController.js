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
exports.FindPiecesByMoldController = void 0;
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const FindPiecesByMold_1 = __importDefault(require("./FindPiecesByMold"));
const PrismaMoldPieceRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldPieceRepository");
class FindPiecesByMoldController {
    constructor() {
        this.findPiecesByMold = new FindPiecesByMold_1.default(new PrismaMoldPieceRepository_1.PrismaMoldPieceRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mold_fk } = req.params;
                const pieces = yield this.findPiecesByMold.find(Number(mold_fk));
                return res.json(pieces);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.FindPiecesByMoldController = FindPiecesByMoldController;
//# sourceMappingURL=FindPiecesByMoldController.js.map