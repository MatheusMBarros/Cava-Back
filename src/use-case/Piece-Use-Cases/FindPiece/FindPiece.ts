import { Piece } from "../../../entities/Piece";
import { PieceRepository } from "../../../repositories/PieceRepository";

export class FindPiece {
	private pieceRepository: PieceRepository;

	constructor(pieceRepository: PieceRepository) {
		this.pieceRepository = pieceRepository;
	}

	async read(id: number): Promise<Piece> {
		try {
			return await this.pieceRepository.findById(id);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
