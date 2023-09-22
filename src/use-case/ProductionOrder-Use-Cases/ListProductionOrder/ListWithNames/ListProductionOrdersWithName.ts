import { ProductionOrder } from "../../../../entities/ProductionOrder";
import { ProductionOrderRepository } from "../../../../repositories/ProductionOrderRepository";

export class ListProductionOrdersWithName {
	private productionOrderRepository: ProductionOrderRepository;

	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async listWithNames(): Promise<ProductionOrder[]> {
		const productionOrders =
			await this.productionOrderRepository.listWithEmployeeNameAndMoldName();
		return productionOrders;
	}
}
