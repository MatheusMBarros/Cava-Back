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
exports.CreateMoldPiece = void 0;
class CreateMoldPiece {
    constructor(moldPieceRepository) {
        this.moldPieceRepository = moldPieceRepository;
    }
    create(moldPiece) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMoldPiece = {
                mold_fk: moldPiece.mold_fk,
                piece_fk: moldPiece.piece_fk,
                cavity: moldPiece.cavity,
            };
            yield this.moldPieceRepository.create(newMoldPiece);
        });
    }
}
exports.CreateMoldPiece = CreateMoldPiece;
//# sourceMappingURL=CreateMoldPiece.js.map