import { ProductionOrderRepository } from "../../../repositories/ProductionOrderRepository";
import { CreateProductionOrderDTO } from "./CreateProductionOrderDTO";

export type CreateProductionOrderRequest = {
	initial_counter: number;
	final_counter: number;
	created_at: Date;
	updated_at: Date;
	mold_fk: number;
	employee_fk: number;
	description: string;
};

export class CreateProductionOrder {
	private productionOrderRepository: ProductionOrderRepository;
	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async create({
		initial_counter,
		final_counter,
		created_at,
		updated_at,
		mold_fk,
		employee_fk,
		description,
	}: CreateProductionOrderRequest): Promise<void> {
		try {
			const productionOrder: CreateProductionOrderDTO = {
				initial_counter,
				final_counter,
				created_at,
				updated_at,
				mold_fk,
				employee_fk,
				description,
			};

			const lastOrder = await this.productionOrderRepository.lastOrder();

			if (final_counter < initial_counter) {
				throw new Error("Final counter must be greater than initial counter.");
			}
			if (lastOrder) {
				if (initial_counter != lastOrder.final_counter) {
					throw new Error(
						"Initial counter must be the same last order final counter."
					);
				}

				if (!lastOrder) {
					this.productionOrderRepository.create(productionOrder);
				}
			}
			await this.productionOrderRepository.create(productionOrder);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
