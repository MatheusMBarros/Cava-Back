import { MoldPiece } from "../entities/MoldPiece";
import { CreateMoldPieceDTO } from "../use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateMoldPieceDTO";
import { UpdateMoldPieceDTO } from "../use-case/MoldPiece-Use-Cases/UpdateMoldPiece/UpdateMoldPieceDTO";


export interface MoldPieceRepository {
	create(moldPiece: CreateMoldPieceDTO): Promise<void>;
	update(moldPiece: UpdateMoldPieceDTO): Promise<MoldPiece>;
	delete(moldPieceId: number): Promise<void>;
	findAll(): Promise<MoldPiece[]>;
	findById(moldPieceId: number): Promise<MoldPiece>;
	findPiecesByMoldId(moldId: number): Promise<MoldPiece[]>;
	returnTotalAluminiumLostPerMold(moldId: number): Promise<number>;
}
