import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldRepository } from "@/repositories/PrismaRepository/PrismaMoldRepository";
import { Request, Response } from "express";
import { ListMolds } from "./ListMolds";

export class ListMoldsController {
	private listMold: ListMolds;
	constructor() {
		this.listMold = new ListMolds(new PrismaMoldRepository(prismaInstance));
	}
	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const molds = await this.listMold.execute();
			return res.status(200).json(molds);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
