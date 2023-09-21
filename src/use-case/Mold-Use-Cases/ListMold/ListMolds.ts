import { MoldRepository } from "@/repositories/MoldRepository";
import { Mold } from "@/entities/Mold";

export class ListMolds {
	private moldRepository: MoldRepository;

	constructor(moldRepository: MoldRepository) {
		this.moldRepository = moldRepository;
	}

	async execute(): Promise<Mold[]> {
		return await this.moldRepository.findAll();
	}
}
