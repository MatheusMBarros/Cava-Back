import { PrismaClient } from "@prisma/client";
import { CreateMoldPieceDTO } from "./CreateMoldPieceDTO";

export type CavityFilledProps = {
	prisma: PrismaClient;
	moldPiece: CreateMoldPieceDTO;
};

export const cavityFilled = async ({
	prisma,
	moldPiece,
}: CavityFilledProps) => {
	const resquest = await prisma.mold_Piece.findFirst({
		where: {
			cavity: moldPiece.cavity,
			mold_fk: moldPiece.mold_fk,
		},
	});
	return resquest;
};
