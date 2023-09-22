import { MoldPieceRepository } from "../../../repositories/MoldPieceRepository";

export class DeleteMoldPiece {
	private moldPieceRepository: MoldPieceRepository;

	constructor(moldPieceRepository: MoldPieceRepository) {
		this.moldPieceRepository = moldPieceRepository;
	}

	async delete(moldPieceId: number): Promise<void> {
		await this.moldPieceRepository.delete(moldPieceId);
	}
}
