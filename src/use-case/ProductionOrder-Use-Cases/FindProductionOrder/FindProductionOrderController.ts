import { Request, Response } from "express";
import { PrismaProductionOrderRepository } from "@/repositories/PrismaRepository/PrismaProductionOrderRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { FindProductionOrder } from "./FindProductionOrder";

export class FindProductionOrderController {
	private findProductionOrder: FindProductionOrder;
	constructor() {
		this.findProductionOrder = new FindProductionOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const productionOrder = await this.findProductionOrder.show(Number(id));
			return res.status(200).json(productionOrder);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
