import { Mold } from "@/entities/Mold";
import { MoldRepository } from "@/repositories/MoldRepository";

export class FindMold {
	private moldRepository: MoldRepository;
	constructor(moldRepository: MoldRepository) {
		this.moldRepository = moldRepository;
	}

	async find(id: number): Promise<Mold> {
		if (!id) {
			throw new Error("Mold id is required");
		}
		return await this.moldRepository.findById(id);
	}
}
