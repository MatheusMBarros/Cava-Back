import { Request, Response } from "express";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { UpdateMoldPiece } from "./UpdateMoldPiece";
import { PrismaMoldPieceRepository } from "../../../repositories/PrismaRepository/PrismaMoldPieceRepository";

export class UpdateMoldPieceController {
	private updateMoldPiece: UpdateMoldPiece;

	constructor() {
		this.updateMoldPiece = new UpdateMoldPiece(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const { mold_fk, piece_fk, cavity } = req.body;
		try {
			const moldPiece = await this.updateMoldPiece.update({
				mold_piece_id: Number(id),
				mold_fk,
				piece_fk,
				cavity,
			});
			return res.status(200).json(moldPiece);
		} catch (err: any) {
			return res.status(400).json({
				message: err.message || "Unexpected error.",
			});
		}
	}
}
