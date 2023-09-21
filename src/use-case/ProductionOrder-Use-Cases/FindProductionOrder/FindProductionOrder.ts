import { ProductionOrder } from "@/entities/ProductionOrder";
import { ProductionOrderRepository } from "@/repositories/ProductionOrderRepository";

export class FindProductionOrder {
  private productionOrderRepository: ProductionOrderRepository;
  constructor(productionOrderRepository: ProductionOrderRepository) {
    this.productionOrderRepository = productionOrderRepository;
  }

  async show(id: number): Promise<ProductionOrder> {
    try {
      const productionOrder = await this.productionOrderRepository.show(id);
      return productionOrder;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
