import { MoldPiece } from "@/entities/MoldPiece";
import { MoldPieceRepository } from "@/repositories/MoldPieceRepository";

export class ListMoldPiece {
  private moldPieceRepository: MoldPieceRepository;

  constructor(moldPieceRepository: MoldPieceRepository) {
    this.moldPieceRepository = moldPieceRepository;
  }

  async execute(): Promise<MoldPiece[]> {
    const molds = await this.moldPieceRepository.findAll();
    return molds;
  }
}
