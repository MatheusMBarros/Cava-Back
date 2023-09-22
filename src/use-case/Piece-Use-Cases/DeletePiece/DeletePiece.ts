import { PieceRepository } from "../../../repositories/PieceRepository";

export class DeletePiece {
	private pieceRepository: PieceRepository;

	constructor(pieceRepository: PieceRepository) {
		this.pieceRepository = pieceRepository;
	}

	async delete(id: number): Promise<void> {
		try {
			return await this.pieceRepository.delete(Number(id));
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
