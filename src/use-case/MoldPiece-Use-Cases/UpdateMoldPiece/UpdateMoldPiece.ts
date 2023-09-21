import { MoldPiece } from "@/entities/MoldPiece";
import { MoldPieceRepository } from "@/repositories/MoldPieceRepository";
import { UpdateMoldPieceDTO } from "./UpdateMoldPieceDTO";

export class UpdateMoldPiece {
	private moldPieceRepository: MoldPieceRepository;

	constructor(moldPieceRepository: MoldPieceRepository) {
		this.moldPieceRepository = moldPieceRepository;
	}

	async update(moldPiece: UpdateMoldPieceDTO): Promise<MoldPiece> {
		const moldPieceUpdated = await this.moldPieceRepository.update(moldPiece);
		return moldPieceUpdated;
	}
}
