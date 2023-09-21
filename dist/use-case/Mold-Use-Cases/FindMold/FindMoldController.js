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
exports.FindMoldController = void 0;
const PrismaMoldRepository_1 = require("@/repositories/PrismaRepository/PrismaMoldRepository");
const PrismaSingletonInstance_1 = __importDefault(require("@/prisma/PrismaSingletonInstance"));
const FindMold_1 = require("./FindMold");
class FindMoldController {
    constructor() {
        this.findMold = new FindMold_1.FindMold(new PrismaMoldRepository_1.PrismaMoldRepository(PrismaSingletonInstance_1.default));
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const mold = yield this.findMold.find(Number(id));
                return res.status(200).send(mold);
            }
            catch (error) {
                return res.status(400).json({
                    message: error.message || "Something went wrong",
                });
            }
        });
    }
}
exports.FindMoldController = FindMoldController;
//# sourceMappingURL=FindMoldController.js.map