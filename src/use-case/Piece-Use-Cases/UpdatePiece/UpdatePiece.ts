import { PieceRepository } from "@/repositories/PieceRepository";
import { Piece } from "@/entities/Piece";
import { UpdatePieceDTO } from "./UpdatePieceDTO";

export class UpdatePiece {
	private pieceRepository: PieceRepository;
	constructor(pieceRepository: PieceRepository) {
		this.pieceRepository = pieceRepository;
	}

	async update(updatePiece: UpdatePieceDTO): Promise<Piece> {
		try {
			return await this.pieceRepository.update(updatePiece);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
