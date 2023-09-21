import { Request, Response } from "express";
import { PrismaProductionOrderRepository } from "@/repositories/PrismaRepository/PrismaProductionOrderRepository";
import { CreateProductionOrder } from "./CreateProductionOrder";
import prismaInstance from "@/prisma/PrismaSingletonInstance";

export class CreateProductionOrderController {
	private createProductionOrder: CreateProductionOrder;

	constructor() {
		this.createProductionOrder = new CreateProductionOrder(
			new PrismaProductionOrderRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const {
			created_at,
			updated_at,
			initial_counter,
			final_counter,
			employee_fk,
			mold_fk,
			description,
		} = req.body;

		try {
			await this.createProductionOrder.create({
				created_at,
				updated_at,
				initial_counter,
				final_counter,
				employee_fk,
				mold_fk,
				description,
			});
			return res.status(201).send();
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
