import { PieceRepository } from "@/repositories/PieceRepository";
import { Piece } from "@/entities/Piece";

export class ListPiece {
  private PieceRepository: PieceRepository;

  constructor(PieceRepository: PieceRepository) {
    this.PieceRepository = PieceRepository;
  }

  async execute(): Promise<Piece[]> {
    const piece = await this.PieceRepository.findAll();
    return piece;
  }
}
