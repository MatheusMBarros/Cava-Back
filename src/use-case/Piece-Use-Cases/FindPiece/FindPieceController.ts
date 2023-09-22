import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaPieceRepository } from "../../../repositories/PrismaRepository/PrismaPieceRepository";
import { FindPiece } from "./FindPiece";
import { Request, Response } from "express";

export class FindPieceController {
	private findPiece: FindPiece;

	constructor() {
		this.findPiece = new FindPiece(new PrismaPieceRepository(prismaInstance));
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const piece = await this.findPiece.read(Number(id));
			return res.status(200).send(piece);
		} catch (error: any) {
			return res.send(error.message);
		}
	}
}
