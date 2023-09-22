import { Piece } from "../entities/Piece";
import { CreatePieceDTO } from "../use-case/Piece-Use-Cases/CreatePiece/CreatePieceDTO";
import { UpdatePieceDTO } from "../use-case/Piece-Use-Cases/UpdatePiece/UpdatePieceDTO";


export interface PieceRepository {
	create(piece: CreatePieceDTO): Promise<void>;
	findById(id: number): Promise<Piece>;
	delete(id: number): Promise<void>;
	update(updatePiece: UpdatePieceDTO): Promise<Piece>;
	findAll(): Promise<Piece[]>;
	findByName(piece_name: string): Promise<Piece>;
}
