import { Request, Response } from "express";
import { LastOrder } from "./LastOrder";
import { PrismaProductionOrderRepository } from "../../../repositories/PrismaRepository/PrismaProductionOrderRepository";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";

export class LastOrderController {
	private lastOrder: LastOrder;

	constructor() {
		this.lastOrder = new LastOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const lastOrder = await this.lastOrder.lastOrder();
			return res.status(200).json(lastOrder);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
