import { Request, Response } from "express";
import { UpdateMold } from "./UpdateMold";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldRepository } from "@/repositories/PrismaRepository/PrismaMoldRepository";

export class UpdateMoldController {
	private updateMold: UpdateMold;

	constructor() {
		this.updateMold = new UpdateMold(new PrismaMoldRepository(prismaInstance));
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const {
			name,
			total_weight,
			channel_return_weight,
			channel_lost_percentage,
		} = req.body;
		const { id } = req.params;

		try {
			await this.updateMold.update({
				mold_id: Number(id),
				name,
				total_weight,
				channel_return_weight,
				channel_lost_percentage,
			});
			return res.status(200).json({ message: "Mold updated" });
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
