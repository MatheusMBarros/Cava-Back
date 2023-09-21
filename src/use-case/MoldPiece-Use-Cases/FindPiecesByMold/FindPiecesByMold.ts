import { MoldPiece } from "@/entities/MoldPiece";
import { MoldPieceRepository } from "@/repositories/MoldPieceRepository";

class FindPiecesByMold {
	private moldPieceRepository: MoldPieceRepository;

	constructor(moldPieceRepository: MoldPieceRepository) {
		this.moldPieceRepository = moldPieceRepository;
	}

	async find(moldId: number): Promise<MoldPiece[]> {
		const pieces = await this.moldPieceRepository.findPiecesByMoldId(
			Number(moldId)
		);
		return pieces;
	}
}

export default FindPiecesByMold;
