import { Request, Response } from "express";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import FindPiecesByMold from "./FindPiecesByMold";
import { PrismaMoldPieceRepository } from "../../../repositories/PrismaRepository/PrismaMoldPieceRepository";

export class FindPiecesByMoldController {
	private findPiecesByMold: FindPiecesByMold;

	constructor() {
		this.findPiecesByMold = new FindPiecesByMold(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { mold_fk } = req.params;

			const pieces = await this.findPiecesByMold.find(Number(mold_fk));

			return res.json(pieces);
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	}
}
