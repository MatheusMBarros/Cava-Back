import { PrismaClient } from "@prisma/client";
import { MoldPieceRepository } from "../MoldPieceRepository";
import { MoldPiece } from "../../entities/MoldPiece";
import { cavityFilled } from "../../use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateModlPieceDMO";
import { CreateMoldPieceDTO } from "../../use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateMoldPieceDTO";
import { UpdateMoldPieceDTO } from "../../use-case/MoldPiece-Use-Cases/UpdateMoldPiece/UpdateMoldPieceDTO";

export class PrismaMoldPieceRepository implements MoldPieceRepository {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}
	async returnTotalAluminiumLostPerMold(moldId: number): Promise<number> {
		try {
			const moldPieces = await this.prisma.mold_Piece.findMany({
				where: {
					mold_fk: moldId,
				},
			});
			let totalAluminiumLoss = 0;
			if (moldPieces.length === 0) return (totalAluminiumLoss = 0);

			for (const moldPiece of moldPieces) {
				try {
					// Obtém informações sobre a peça, incluindo o campo 'splinter'
					const piece = await this.prisma.piece.findUnique({
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
				} catch (error: any) {
					// Lida com erros ao consultar informações da peça
					console.error(`Erro ao obter informações da peça: ${error.message}`);
				}
			}

			// No final, adicione a perda de alumínio do molde à perda total
			const mold = await this.prisma.mold.findUnique({
				where: {
					mold_id: moldId,
				},
			});

			if (mold) {
				totalAluminiumLoss += mold.mold_aluminium_loss;
			}

			return Number(totalAluminiumLoss.toPrecision(3));
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async findPiecesByMoldId(moldId: number): Promise<MoldPiece[]> {
		const moldPieces = await this.prisma.mold_Piece.findMany({
			where: {
				mold_fk: moldId,
			},
		});
		return moldPieces.map(
			(moldPiece: any) =>
				new MoldPiece(
					moldPiece.mold_piece_id,
					moldPiece.cavity,
					moldPiece.mold_fk,
					moldPiece.piece_fk
				)
		);
	}
	async create(moldPiece: CreateMoldPieceDTO): Promise<void> {
		const existingMoldPiece = await cavityFilled({
			prisma: this.prisma,
			moldPiece: moldPiece,
		});
		if (existingMoldPiece) {
			throw new Error(
				`Já existe um MoldPiece com a cavidade ${moldPiece.cavity} para o mesmo Mold.`
			);
		}
		await this.prisma.mold_Piece.create({
			data: {
				cavity: moldPiece.cavity,
				mold_fk: moldPiece.mold_fk,
				piece_fk: moldPiece.piece_fk,
			},
		});
	}
	async update(moldPiece: UpdateMoldPieceDTO): Promise<MoldPiece> {
		await this.prisma.mold_Piece.update({
			where: {
				mold_piece_id: moldPiece.mold_piece_id,
			},
			data: {
				cavity: moldPiece.cavity,
				mold_fk: moldPiece.mold_fk,
				piece_fk: moldPiece.piece_fk,
			},
		});

		return new MoldPiece(
			moldPiece.mold_piece_id,
			moldPiece.cavity,
			moldPiece.mold_fk,
			moldPiece.piece_fk
		);
	}
	async delete(moldPieceId: number): Promise<void> {
		await this.prisma.mold_Piece.delete({
			where: {
				mold_piece_id: moldPieceId,
			},
		});
	}

	async findById(id: number): Promise<MoldPiece> {
		try {
			const moldPiece = await this.prisma.mold_Piece.findUnique({
				where: {
					mold_piece_id: id,
				},
			});
			if (!moldPiece) throw new Error("Mold piece not found");
			return new MoldPiece(
				moldPiece.mold_piece_id,
				moldPiece.cavity,
				moldPiece.mold_fk,
				moldPiece.piece_fk
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async findAll(): Promise<MoldPiece[]> {
		const moldPieces = await this.prisma.mold_Piece.findMany();
		return moldPieces.map(
			(moldPiece: any) =>
				new MoldPiece(
					moldPiece.mold_piece_id,
					moldPiece.cavity,
					moldPiece.mold_fk,
					moldPiece.piece_fk
				)
		);
	}
}
