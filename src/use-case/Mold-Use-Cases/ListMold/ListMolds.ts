import { Mold } from "../../../entities/Mold";
import { MoldRepository } from "../../../repositories/MoldRepository";

export class ListMolds {
	private moldRepository: MoldRepository;

	constructor(moldRepository: MoldRepository) {
		this.moldRepository = moldRepository;
	}

	async execute(): Promise<Mold[]> {
		return await this.moldRepository.findAll();
	}
}
