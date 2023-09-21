import { Request, Response } from "express";
import { ReturnTotalAluminiumLostPerMold } from "./ReturnTotalAluminiumLostPerMold";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldPieceRepository } from "@/repositories/PrismaRepository/PrismaMoldPieceRepository";

export class ReturnTotalAluminiumLostPerMoldController {
	private returnTotalAluminiumLostPerMold: ReturnTotalAluminiumLostPerMold;

	constructor() {
		this.returnTotalAluminiumLostPerMold = new ReturnTotalAluminiumLostPerMold(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { mold_fk } = req.params;

			const totalAluminiumLostPerMold =
				await this.returnTotalAluminiumLostPerMold.returnTotalAluminiumLostPerMold(
					Number(mold_fk)
				);

			return res.json(totalAluminiumLostPerMold);
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	}
}
