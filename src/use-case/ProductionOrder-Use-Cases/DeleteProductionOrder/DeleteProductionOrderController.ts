import { Request, Response } from "express";
import { DeleteProductionOrder } from "./DeleteProductionOrder";
import { PrismaProductionOrderRepository } from "@/repositories/PrismaRepository/PrismaProductionOrderRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";

export class DeleteProductionOrderController {
	private deleteProductionOrder: DeleteProductionOrder;
	constructor() {
		this.deleteProductionOrder = new DeleteProductionOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}
	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		try {
			await this.deleteProductionOrder.delete(Number(id));
			return res
				.status(200)
				.json({ message: "ProductionOrder deletada com sucesso!" });
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
