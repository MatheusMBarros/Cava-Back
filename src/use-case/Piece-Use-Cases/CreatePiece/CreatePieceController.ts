import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaPieceRepository } from "@/repositories/PrismaRepository/PrismaPieceRepository";
import { CreatePiece } from "./CreatePiece";
import { Request, Response } from "express";

export class CreatePieceController {
	private createPiece: CreatePiece;

	constructor() {
		this.createPiece = new CreatePiece(
			new PrismaPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const {
			name,
			size,
			handle_type,
			gross_weight,
			net_weight,
			splinter_lost_percentage,
		} = req.body;

		try {
			const piece = await this.createPiece.create({
				name,
				size,
				handle_type,
				gross_weight,
				net_weight,
				splinter_lost_percentage,
			});
			return res.status(201).send(piece);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
