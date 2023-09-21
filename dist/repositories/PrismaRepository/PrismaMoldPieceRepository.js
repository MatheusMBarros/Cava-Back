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
exports.PrismaMoldPieceRepository = void 0;
const MoldPiece_1 = require("@/entities/MoldPiece");
const CreateModlPieceDMO_1 = require("@/use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateModlPieceDMO");
class PrismaMoldPieceRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    returnTotalAluminiumLostPerMold(moldId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moldPieces = yield this.prisma.mold_Piece.findMany({
                    where: {
                        mold_fk: moldId,
                    },
                });
                let totalAluminiumLoss = 0;
                if (moldPieces.length === 0)
                    return (totalAluminiumLoss = 0);
                for (const moldPiece of moldPieces) {
                    try {
                        // Obtém informações sobre a peça, incluindo o campo 'splinter'
                        const piece = yield this.prisma.piece.findUnique({
                            where: {
                                piece_id: moldPiece.piece_fk,
                            },
                            select: {
                                splinter: true,
                            },
                        });
                        // Verifica se a peça foi encontrada no banco de dados
                        if (piece) {
                            // Calcula a perda de alumínio para esta peça com base no valor de 'splinter'
                            const pieceAluminiumLoss = piece.splinter || 0; // Suponhamos que 0 seja um valor padrão se 'splinter' estiver ausente.
                            // Adiciona a perda de alumínio desta peça à perda total
                            totalAluminiumLoss += pieceAluminiumLoss;
                        }
                    }
                    catch (error) {
                        // Lida com erros ao consultar informações da peça
                        console.error(`Erro ao obter informações da peça: ${error.message}`);
                    }
                }
                // No final, adicione a perda de alumínio do molde à perda total
                const mold = yield this.prisma.mold.findUnique({
                    where: {
                        mold_id: moldId,
                    },
                });
                if (mold) {
                    totalAluminiumLoss += mold.mold_aluminium_loss;
                }
                return Number(totalAluminiumLoss.toPrecision(3));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findPiecesByMoldId(moldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const moldPieces = yield this.prisma.mold_Piece.findMany({
                where: {
                    mold_fk: moldId,
                },
            });
            return moldPieces.map((moldPiece) => new MoldPiece_1.MoldPiece(moldPiece.mold_piece_id, moldPiece.cavity, moldPiece.mold_fk, moldPiece.piece_fk));
        });
    }
    create(moldPiece) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingMoldPiece = yield (0, CreateModlPieceDMO_1.cavityFilled)({
                prisma: this.prisma,
                moldPiece: moldPiece,
            });
            if (existingMoldPiece) {
                throw new Error(`Já existe um MoldPiece com a cavidade ${moldPiece.cavity} para o mesmo Mold.`);
            }
            yield this.prisma.mold_Piece.create({
                data: {
                    cavity: moldPiece.cavity,
                    mold_fk: moldPiece.mold_fk,
                    piece_fk: moldPiece.piece_fk,
                },
            });
        });
    }
    update(moldPiece) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.mold_Piece.update({
                where: {
                    mold_piece_id: moldPiece.mold_piece_id,
                },
                data: {
                    cavity: moldPiece.cavity,
                    mold_fk: moldPiece.mold_fk,
                    piece_fk: moldPiece.piece_fk,
                },
            });
            return new MoldPiece_1.MoldPiece(moldPiece.mold_piece_id, moldPiece.cavity, moldPiece.mold_fk, moldPiece.piece_fk);
        });
    }
    delete(moldPieceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.mold_Piece.delete({
                where: {
                    mold_piece_id: moldPieceId,
                },
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const moldPiece = yield this.prisma.mold_Piece.findUnique({
                    where: {
                        mold_piece_id: id,
                    },
                });
                if (!moldPiece)
                    throw new Error("Mold piece not found");
                return new MoldPiece_1.MoldPiece(moldPiece.mold_piece_id, moldPiece.cavity, moldPiece.mold_fk, moldPiece.piece_fk);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const moldPieces = yield this.prisma.mold_Piece.findMany();
            return moldPieces.map((moldPiece) => new MoldPiece_1.MoldPiece(moldPiece.mold_piece_id, moldPiece.cavity, moldPiece.mold_fk, moldPiece.piece_fk));
        });
    }
}
exports.PrismaMoldPieceRepository = PrismaMoldPieceRepository;
//# sourceMappingURL=PrismaMoldPieceRepository.js.map