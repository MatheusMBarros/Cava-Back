import { PrismaClient } from "@prisma/client";

import { MoldRepository } from "../MoldRepository";
import { Mold } from "../../entities/Mold";
import { CreateMoldDTO } from "../../use-case/Mold-Use-Cases/CreateMold/CreateMoldDTO";
import { UpdateMoldDTO } from "../../use-case/Mold-Use-Cases/UpdateMold/UpdateMoldDTO";

export class PrismaMoldRepository implements MoldRepository {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(mold: CreateMoldDTO): Promise<void> {
		const {
			name,
			total_weight,
			channel_return_weight,
			channel_lost_percentage,
		} = mold;
		await this.prisma.mold.create({
			data: {
				name,
				total_weight,
				channel_return_weight,
				channel_lost_percentage,
				mold_aluminium_loss: Number(
					(channel_return_weight * channel_lost_percentage).toFixed(3)
				),
			},
		});
	}

	findByName(name: string): Promise<Mold> {
		throw new Error("Method not implemented.");
	}
	async delete(id: number): Promise<void> {
		try {
			await this.prisma.mold.delete({
				where: {
					mold_id: id,
				},
			});
		} catch (error: any) {
			throw new Error(error);
		}
	}
	async update(updateMold: UpdateMoldDTO): Promise<Mold> {
		try {
			const {
				mold_id,
				name,
				total_weight,
				channel_return_weight,
				channel_lost_percentage,
			} = updateMold;
			await this.prisma.mold.update({
				where: {
					mold_id: mold_id,
				},
				data: {
					name,
					total_weight,
					channel_return_weight,
					channel_lost_percentage,
				},
			});

			return new Mold(
				updateMold.mold_id,
				updateMold.name,
				updateMold.total_weight,
				updateMold.channel_return_weight,
				updateMold.channel_lost_percentage
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async findById(id: number): Promise<Mold> {
		const mold = await this.prisma.mold.findUnique({
			where: {
				mold_id: id,
			},
		});
		if (!mold) {
			throw new Error("Mold not found");
		}
		return new Mold(
			mold.mold_id,
			mold.name,
			mold.total_weight,
			mold.channel_return_weight,
			mold.channel_lost_percentage
		);
	}

	async findAll(): Promise<Mold[]> {
		try {
			const molds = await this.prisma.mold.findMany();
			return molds.map(
				(mold: any) =>
					new Mold(
						mold.mold_id,
						mold.name,
						mold.total_weight,
						mold.channel_return_weight,
						mold.channel_lost_percentage
					)
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
