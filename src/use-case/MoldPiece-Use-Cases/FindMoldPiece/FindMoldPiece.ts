import { MoldPieceRepository } from "@/repositories/MoldPieceRepository";
import { MoldPiece } from "@/entities/MoldPiece";

export class FindMoldPiece {
  private moldPieceRepository: MoldPieceRepository;

  constructor(moldPieceRepository: MoldPieceRepository) {
    this.moldPieceRepository = moldPieceRepository;
  }

  async read(id: number): Promise<MoldPiece> {
    const moldPiece = await this.moldPieceRepository.findById(id);
    return moldPiece;
  }
}
