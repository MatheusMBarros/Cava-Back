import { Request, Response } from "express";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { ListMoldPiece } from "./ListMoldPices";
import { PrismaMoldPieceRepository } from "../../../repositories/PrismaRepository/PrismaMoldPieceRepository";

export class ListMoldPiecesController {
	private listMoldPiece: ListMoldPiece;
	constructor() {
		this.listMoldPiece = new ListMoldPiece(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}
	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const molds = await this.listMoldPiece.execute();
			return res.status(200).json(molds);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
