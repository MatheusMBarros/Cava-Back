import { ProductionOrderRepository } from "../../../repositories/ProductionOrderRepository";

export class DeleteProductionOrder {
	private productionOrderRepository: ProductionOrderRepository;
	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async delete(id: number): Promise<void> {
		try {
			await this.productionOrderRepository.delete(id);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
