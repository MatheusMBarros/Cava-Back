import { MoldRepository } from "@/repositories/MoldRepository";
import { UpdateMoldDTO } from "@/use-case/Mold-Use-Cases/UpdateMold/UpdateMoldDTO";
export class UpdateMold {
	private moldRepository: MoldRepository;
	constructor(moldRepository: MoldRepository) {
		this.moldRepository = moldRepository;
	}

	async update(mold: UpdateMoldDTO): Promise<void> {
		try {
			await this.moldRepository.update(mold);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
