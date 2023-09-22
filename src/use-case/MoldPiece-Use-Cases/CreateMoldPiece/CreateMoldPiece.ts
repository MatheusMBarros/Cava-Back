import { MoldPieceRepository } from "../../../repositories/MoldPieceRepository";
import { CreateMoldPieceDTO } from "./CreateMoldPieceDTO";

type CreateMoldPieceRequest = {
	mold_fk: number;
	piece_fk: number;
	cavity: number;
};

export class CreateMoldPiece {
	private moldPieceRepository: MoldPieceRepository;

	constructor(moldPieceRepository: MoldPieceRepository) {
		this.moldPieceRepository = moldPieceRepository;
	}

	async create(moldPiece: CreateMoldPieceRequest): Promise<void> {
		const newMoldPiece: CreateMoldPieceDTO = {
			mold_fk: moldPiece.mold_fk,
			piece_fk: moldPiece.piece_fk,
			cavity: moldPiece.cavity,
		};
		await this.moldPieceRepository.create(newMoldPiece);
	}
}
