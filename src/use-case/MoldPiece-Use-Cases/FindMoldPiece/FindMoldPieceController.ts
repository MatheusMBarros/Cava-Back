import { Request, Response } from "express";
import { FindMoldPiece } from "./FindMoldPiece";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldPieceRepository } from "@/repositories/PrismaRepository/PrismaMoldPieceRepository";

export class FindMoldPieceController {
	private findMoldPiece: FindMoldPiece;

	constructor() {
		this.findMoldPiece = new FindMoldPiece(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		try {
			const moldPiece = await this.findMoldPiece.read(Number(id));
			return res.status(200).json(moldPiece);
		} catch (err: any) {
			return res.status(400).json({
				message: err.message || "Unexpected error.",
			});
		}
	}
}
