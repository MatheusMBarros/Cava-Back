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
exports.CreatePiece = void 0;
class CreatePiece {
    constructor(pieceRepository) {
        this.pieceRepository = pieceRepository;
    }
    create({ name, handle_type, size, gross_weight, net_weight, splinter_lost_percentage, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const piece = {
                    name,
                    handle_type,
                    size,
                    gross_weight,
                    net_weight,
                    splinter_lost_percentage,
                };
                yield this.pieceRepository.create(piece);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CreatePiece = CreatePiece;
//# sourceMappingURL=CreatePiece.js.map