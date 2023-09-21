import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldRepository } from "@/repositories/PrismaRepository/PrismaMoldRepository";
import { DeleteMold } from "./DeleteMold";
import { Request, Response } from "express";
export class DeleteMoldController {
	private deleteMold: DeleteMold;

	constructor() {
		this.deleteMold = new DeleteMold(new PrismaMoldRepository(prismaInstance));
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			await this.deleteMold.delete(Number(id));
			return res.status(200).json({ message: "Mold deleted successfully" });
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
