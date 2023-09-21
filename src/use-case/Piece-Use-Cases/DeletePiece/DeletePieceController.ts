import { Request, Response } from "express";
import { PrismaPieceRepository } from "@/repositories/PrismaRepository/PrismaPieceRepository";
import { DeletePiece } from "./DeletePiece";
import prismaInstance from "@/prisma/PrismaSingletonInstance";

export class DeletePieceController {
	private deletePiece: DeletePiece;
	constructor() {
		this.deletePiece = new DeletePiece(
			new PrismaPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			console.log(id);
			await this.deletePiece.delete(Number(id));
			return res.status(200).send();
		} catch (error: any) {
			return res.send(error.message);
		}
	}
}
