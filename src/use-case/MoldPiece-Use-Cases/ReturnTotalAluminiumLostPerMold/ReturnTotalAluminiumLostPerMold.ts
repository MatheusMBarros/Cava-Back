import { MoldPieceRepository } from "../../../repositories/MoldPieceRepository";

export class ReturnTotalAluminiumLostPerMold {
	private moldPieceRepository: MoldPieceRepository;

	constructor(moldPieceRepository: MoldPieceRepository) {
		this.moldPieceRepository = moldPieceRepository;
	}

	async returnTotalAluminiumLostPerMold(moldId: number): Promise<number> {
		const totalAluminiumLostPerMold =
			await this.moldPieceRepository.returnTotalAluminiumLostPerMold(moldId);
		return totalAluminiumLostPerMold;
	}
}
