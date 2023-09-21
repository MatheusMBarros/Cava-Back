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
exports.PrismaPieceRepository = void 0;
const Piece_1 = require("@/entities/Piece");
class PrismaPieceRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByName(piece_name) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const piece = yield this.prisma.piece.findUnique({
                    where: {
                        piece_id: id,
                    },
                });
                if (!piece)
                    throw new Error("Piece not found");
                return new Piece_1.Piece(piece.piece_id, piece.name, piece.handle_type, piece.size, piece.gross_weight, piece.net_weight, piece.splinter_lost_percentage);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    create(piece) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, size, handle_type, gross_weight, net_weight, splinter_lost_percentage, } = piece;
                yield this.prisma.piece.create({
                    data: {
                        name,
                        size,
                        handle_type,
                        gross_weight,
                        net_weight,
                        splinter_lost_percentage,
                        splinter: (gross_weight - net_weight) * splinter_lost_percentage,
                    },
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.piece.delete({
                    where: {
                        piece_id: id,
                    },
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(updatePiece) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, size, handle_type, gross_weight, net_weight, splinter_lost_percentage, } = updatePiece;
                yield this.prisma.piece.update({
                    where: {
                        piece_id: id,
                    },
                    data: {
                        name,
                        handle_type,
                        size,
                        gross_weight,
                        net_weight,
                        splinter_lost_percentage,
                        splinter: (gross_weight - net_weight) * splinter_lost_percentage,
                    },
                });
                return new Piece_1.Piece(updatePiece.id, updatePiece.name, updatePiece.handle_type, updatePiece.size, updatePiece.gross_weight, updatePiece.net_weight, updatePiece.splinter_lost_percentage);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pieces = yield this.prisma.piece.findMany();
                return pieces.map((piece) => new Piece_1.Piece(piece.piece_id, piece.name, piece.handle_type, piece.size, piece.gross_weight, piece.net_weight, piece.splinter_lost_percentage));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.PrismaPieceRepository = PrismaPieceRepository;
//# sourceMappingURL=PrismaPieceRepository.js.map