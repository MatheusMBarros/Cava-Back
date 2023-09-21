import { PieceRepository } from "@/repositories/PieceRepository";
import { CreatePieceDTO } from "./CreatePieceDTO";

type CreatePieceRequest = {
	name: string;
	handle_type: string;
	size: number;
	gross_weight: number;
	net_weight: number;
	splinter_lost_percentage: number;
};

export class CreatePiece {
	private pieceRepository: PieceRepository;

	constructor(pieceRepository: PieceRepository) {
		this.pieceRepository = pieceRepository;
	}

	async create({
		name,
		handle_type,
		size,
		gross_weight,
		net_weight,
		splinter_lost_percentage,
	}: CreatePieceRequest): Promise<void> {
		try {
			const piece: CreatePieceDTO = {
				name,
				handle_type,
				size,
				gross_weight,
				net_weight,
				splinter_lost_percentage,
			};
			await this.pieceRepository.create(piece);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
