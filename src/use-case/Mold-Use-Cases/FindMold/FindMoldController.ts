import { Request, Response } from "express";
import { PrismaMoldRepository } from "@/repositories/PrismaRepository/PrismaMoldRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { FindMold } from "./FindMold";

export class FindMoldController {
	private findMold: FindMold;

	constructor() {
		this.findMold = new FindMold(new PrismaMoldRepository(prismaInstance));
	}
	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const mold = await this.findMold.find(Number(id));
			return res.status(200).send(mold);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Something went wrong",
			});
		}
	}
}
