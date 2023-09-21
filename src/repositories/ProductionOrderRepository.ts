import { ProductionOrder } from "@/entities/ProductionOrder";
import { CreateProductionOrderDTO } from "@/use-case/ProductionOrder-Use-Cases/CreateProductionOrder/CreateProductionOrderDTO";
import { LastOrderDTO } from "@/use-case/ProductionOrder-Use-Cases/LastOrder/LastOrderDTO";
import { UpdateProductionOrderDTO } from "@/use-case/ProductionOrder-Use-Cases/UpdateProductionOrder/UpdateProductionOrderDTO";

export interface ProductionOrderRepository {
	create(productionOrder: CreateProductionOrderDTO): Promise<void>;
	lastOrder(): Promise<LastOrderDTO>;
	show(id: number): Promise<ProductionOrder>;
	list(): Promise<ProductionOrder[]>;
	update(
		updateProductionOrder: UpdateProductionOrderDTO
	): Promise<ProductionOrder>;
	delete(id: number): Promise<void>;
	listWithEmployeeNameAndMoldName(): Promise<ProductionOrder[]>;
}
