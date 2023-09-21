import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaPieceRepository } from "@/repositories/PrismaRepository/PrismaPieceRepository";
import { Request, Response } from "express";
import { UpdatePiece } from "./UpdatePiece";

export class UpdatePieceController {
	private updatePiece: UpdatePiece;

	constructor() {
		this.updatePiece = new UpdatePiece(
			new PrismaPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const {
				name,
				handle_type,
				size,
				net_weight,
				gross_weight,
				splinter_lost_percentage,
			} = req.body;
			const piece = await this.updatePiece.update({
				id: Number(id),
				name,
				handle_type,
				size,
				net_weight,
				gross_weight,
				splinter_lost_percentage,
				splinter: (gross_weight - net_weight) * splinter_lost_percentage,
			});
			return res.status(200).send(piece);
		} catch (error: any) {
			return res.send(error.message);
		}
	}
}
