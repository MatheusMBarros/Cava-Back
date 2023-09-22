import { PrismaClient } from "@prisma/client";
import { PieceRepository } from "../PieceRepository";
import { Piece } from "../../entities/Piece";
import { CreatePieceDTO } from "../../use-case/Piece-Use-Cases/CreatePiece/CreatePieceDTO";
import { UpdatePieceDTO } from "../../use-case/Piece-Use-Cases/UpdatePiece/UpdatePieceDTO";

export class PrismaPieceRepository implements PieceRepository {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}
	findByName(piece_name: string): Promise<Piece> {
		throw new Error("Method not implemented.");
	}
	async findById(id: number): Promise<Piece> {
		try {
			const piece = await this.prisma.piece.findUnique({
				where: {
					piece_id: id,
				},
			});
			if (!piece) throw new Error("Piece not found");
			return new Piece(
				piece.piece_id,
				piece.name,
				piece.handle_type,
				piece.size,
				piece.gross_weight,
				piece.net_weight,
				piece.splinter_lost_percentage
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}
	async create(piece: CreatePieceDTO): Promise<void> {
		try {
			const {
				name,
				size,
				handle_type,
				gross_weight,
				net_weight,
				splinter_lost_percentage,
			} = piece;
			await this.prisma.piece.create({
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
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async delete(id: number): Promise<void> {
		try {
			await this.prisma.piece.delete({
				where: {
					piece_id: id,
				},
			});
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async update(updatePiece: UpdatePieceDTO): Promise<Piece> {
		try {
			const {
				id,
				name,
				size,
				handle_type,
				gross_weight,
				net_weight,
				splinter_lost_percentage,
			} = updatePiece;
			await this.prisma.piece.update({
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
			return new Piece(
				updatePiece.id,
				updatePiece.name,
				updatePiece.handle_type,
				updatePiece.size,
				updatePiece.gross_weight,
				updatePiece.net_weight,
				updatePiece.splinter_lost_percentage
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async findAll(): Promise<Piece[]> {
		try {
			const pieces = await this.prisma.piece.findMany();
			return pieces.map(
				(piece: any) =>
					new Piece(
						piece.piece_id,
						piece.name,
						piece.handle_type,
						piece.size,
						piece.gross_weight,
						piece.net_weight,
						piece.splinter_lost_percentage
					)
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
