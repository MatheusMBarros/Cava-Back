import { Request, Response } from "express";
import { UpdateProductionOrder } from "./UpdateProductionOrder";
import { PrismaProductionOrderRepository } from "../../../repositories/PrismaRepository/PrismaProductionOrderRepository";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";

export class UpdateProductionOrderController {
	private updateProductionOrder: UpdateProductionOrder;
	constructor() {
		this.updateProductionOrder = new UpdateProductionOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const {
			final_counter,
			initial_counter,
			employee_fk,
			updated_at,
			quantity,
			mold_fk,
			description,
		} = req.body;

		try {
			const productionOrder = await this.updateProductionOrder.update({
				id: Number(id),
				final_counter,
				initial_counter,
				employee_fk,
				updated_at,
				quantity,
				mold_fk,
				description,
			});

			return res.status(200).json(productionOrder);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
