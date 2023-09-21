import { ProductionOrder } from "../../../entities/ProductionOrder";
import { ProductionOrderRepository } from "../../../repositories/ProductionOrderRepository";

export class ListProductionOrder {
	private productionOrderRepository: ProductionOrderRepository;
	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async list(): Promise<ProductionOrder[]> {
		try {
			const allProductionOrders = await this.productionOrderRepository.list();
			return allProductionOrders;
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
