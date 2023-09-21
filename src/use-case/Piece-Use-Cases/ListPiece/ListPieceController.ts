import { Request, Response } from "express";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { ListPiece } from "./ListPiece";
import { PrismaPieceRepository } from "@/repositories/PrismaRepository/PrismaPieceRepository";

export class ListPieceController {
	private listPiece: ListPiece;
	constructor() {
		this.listPiece = new ListPiece(new PrismaPieceRepository(prismaInstance));
	}
	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const piece = await this.listPiece.execute();
			return res.status(200).json(piece);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
