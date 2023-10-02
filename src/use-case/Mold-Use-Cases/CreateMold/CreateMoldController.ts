import { Request, Response } from "express";
import { CreateMold } from "./CreateMold";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaMoldRepository } from "../../../repositories/PrismaRepository/PrismaMoldRepository";

export class CreateMoldController {
	private createMold: CreateMold;

	constructor() {
		this.createMold = new CreateMold(new PrismaMoldRepository(prismaInstance));
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const {
			name,
			total_weight,
			channel_return_weight,
			channel_lost_percentage,
		} = req.body;
		try {
			const mold = {
				name,
				total_weight,
				channel_return_weight,
				channel_lost_percentage,
			};
			await this.createMold.create(mold);
			return res.status(201).json({ message: "Mold created successfully" });
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
