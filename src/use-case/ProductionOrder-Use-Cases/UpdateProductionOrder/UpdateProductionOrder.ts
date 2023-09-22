import { ProductionOrder } from "../../../entities/ProductionOrder";
import { ProductionOrderRepository } from "../../../repositories/ProductionOrderRepository";
import { UpdateProductionOrderDTO } from "./UpdateProductionOrderDTO";

export class UpdateProductionOrder {
	private productionOrderRepository: ProductionOrderRepository;
	constructor(productionOrderRepository: ProductionOrderRepository) {
		this.productionOrderRepository = productionOrderRepository;
	}

	async update(
		updateOrder: UpdateProductionOrderDTO
	): Promise<ProductionOrder> {
		try {
			const {
				id,
				final_counter,
				initial_counter,
				employee_fk,
				updated_at,
				quantity,
				mold_fk,
				description,
			} = updateOrder;
			const updatedOrder = await this.productionOrderRepository.update({
				id: Number(id),
				final_counter,
				initial_counter,
				employee_fk,
				updated_at,
				quantity,
				mold_fk,
				description,
			});

			const nextOrder = await this.productionOrderRepository.show(
				updateOrder.id + 1
			);
			nextOrder.setInitialCounter(updatedOrder.getFinalCounter());
			return updatedOrder;
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
