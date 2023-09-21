import { MoldRepository } from "@/repositories/MoldRepository";

export class DeleteMold {
  private moldRepository: MoldRepository;

  constructor(moldRepository: MoldRepository) {
    this.moldRepository = moldRepository;
  }

  async delete(id: number): Promise<void> {
    try {
      await this.moldRepository.delete(id);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
