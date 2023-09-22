import { Request, Response } from "express";
import { DeleteMoldPiece } from "./DeleteMoldPiece";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaMoldPieceRepository } from "../../../repositories/PrismaRepository/PrismaMoldPieceRepository";

export class DeleteMoldPieceController {
	private deleteMoldPiece: DeleteMoldPiece;

	constructor() {
		this.deleteMoldPiece = new DeleteMoldPiece(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		try {
			await this.deleteMoldPiece.delete(Number(id));
			return res.status(200).send();
		} catch (err: any) {
			return res.status(400).json({
				message: err.message || "Unexpected error.",
			});
		}
	}
}
