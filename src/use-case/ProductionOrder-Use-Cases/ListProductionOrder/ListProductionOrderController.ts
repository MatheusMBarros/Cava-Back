import { Request, Response } from "express";
import { PrismaProductionOrderRepository } from "@/repositories/PrismaRepository/PrismaProductionOrderRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { ListProductionOrder } from "./ListProductionOrder";

export class ListProductionOrderController {
	private listProductionOrder: ListProductionOrder;
	constructor() {
		this.listProductionOrder = new ListProductionOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const allProductionOrders = await this.listProductionOrder.list();
			return res.status(200).json(allProductionOrders);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
