import { Request, Response } from "express";
import { CreateMoldPiece } from "./CreateMoldPiece";
import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { PrismaMoldPieceRepository } from "@/repositories/PrismaRepository/PrismaMoldPieceRepository";

export class CreateMoldPieceController {
	private createMoldPiece: CreateMoldPiece;

	constructor() {
		this.createMoldPiece = new CreateMoldPiece(
			new PrismaMoldPieceRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		const { mold_fk, piece_fk, cavity } = req.body;
		try {
			await this.createMoldPiece.create({
				mold_fk,
				piece_fk,
				cavity,
			});
			return res.status(201).send();
		} catch (err: any) {
			return res.status(400).json({
				message: err.message || "Unexpected error.",
			});
		}
	}
}
