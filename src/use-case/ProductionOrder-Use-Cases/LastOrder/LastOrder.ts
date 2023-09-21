import { ProductionOrder } from "@/entities/ProductionOrder";
import { ProductionOrderRepository } from "@/repositories/ProductionOrderRepository";
import { LastOrderDTO } from "./LastOrderDTO";

export class LastOrder {
	private productionOrderRepository: ProductionOrderRepository;

	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async lastOrder(): Promise<LastOrderDTO> {
		const lastOrder = await this.productionOrderRepository.lastOrder();
		return lastOrder;
	}
}
2;
