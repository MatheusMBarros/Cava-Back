import { Request, Response } from "express";

import { ListProductionOrdersWithName } from "./ListProductionOrdersWithName";
import prismaInstance from "../../../../prisma/PrismaSingletonInstance";
import { PrismaProductionOrderRepository } from "../../../../repositories/PrismaRepository/PrismaProductionOrderRepository";

export class ListProductionOrdersWithNameController {
	private listProductionOrdersWithName: ListProductionOrdersWithName;
	constructor() {
		this.listProductionOrdersWithName = new ListProductionOrdersWithName(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const allProductionOrders =
				await this.listProductionOrdersWithName.listWithNames();
			return res.status(200).json(allProductionOrders);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
