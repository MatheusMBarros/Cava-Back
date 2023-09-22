import { MoldRepository } from "../../../repositories/MoldRepository";
import { CreateMoldDTO } from "./CreateMoldDTO";

type CreateMoldRequest = {
	name: string;
	channel_return_weight: number;
	total_weight: number;
	channel_lost_percentage: number;
};
export class CreateMold {
	private moldRepository: MoldRepository;

	constructor(moldRepository: MoldRepository) {
		this.moldRepository = moldRepository;
	}
	async create({
		name,
		channel_return_weight,
		total_weight,
		channel_lost_percentage,
	}: CreateMoldRequest): Promise<void> {
		const newMold: CreateMoldDTO = {
			name,
			channel_return_weight,
			total_weight,
			channel_lost_percentage,
		};
		if (
			newMold.name.trim() === "" ||
			newMold.channel_return_weight === null ||
			newMold.total_weight === null ||
			newMold.channel_lost_percentage === null
		) {
			throw new Error("Verify if all fields are filled");
		}
		await this.moldRepository.create(newMold);
	}
}
