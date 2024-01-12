import { ProductionOrderRepository } from "../ProductionOrderRepository";
import { CreateProductionOrderDTO } from "../../use-case/ProductionOrder-Use-Cases/CreateProductionOrder/CreateProductionOrderDTO";
import { LastOrderDTO } from "../../use-case/ProductionOrder-Use-Cases/LastOrder/LastOrderDTO";
import { UpdateProductionOrderDTO } from "../../use-case/ProductionOrder-Use-Cases/UpdateProductionOrder/UpdateProductionOrderDTO";
import { formatData } from "../../utils/FormaterData";
import { ProductionOrder } from "../../entities/ProductionOrder";
import { PrismaClient } from "../../prisma/generated/client";

export class PrismaProductionOrderRepository
	implements ProductionOrderRepository
{
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(productionOrder: CreateProductionOrderDTO): Promise<void> {
		try {
			const {
				initial_counter,
				final_counter,
				employee_fk,
				mold_fk,
				description,
				created_at,
				finished_at,
			} = productionOrder;

			if (description === null) {
				throw new Error("Descrição não pode ser nula.");
			}

			await this.prisma.production_Order.create({
				data: {
					initial_counter: initial_counter,
					final_counter: final_counter,
					mold_quantity: final_counter - initial_counter,
					created_at: new Date(),
					finished_at: finished_at,
					employee_fk: employee_fk,
					mold_fk: mold_fk,
					description: description,
				},
			});
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async listWithEmployeeNameAndMoldName(): Promise<ProductionOrder[]> {
		try {
			const productionOrders = await this.prisma.production_Order.findMany({
				include: {
					mold: { select: { name: true } },
					employee: { select: { name: true } },
				},
			});

			if (productionOrders.length === 0) {
				throw new Error("Nenhuma ProductionOrder encontrada.");
			}

			const pOrders = productionOrders.map((productionOrder: any) => ({
				id: productionOrder.production_order_id,
				initial_counter: productionOrder.initial_counter,
				final_counter:
					productionOrder.final_counter ?? productionOrder.initial_counter,
				quantity: productionOrder.mold_quantity,
				created_at: productionOrder.created_at,
				finished_at: productionOrder.finished_at,
				employee_fk: productionOrder.employee_fk,
				mold_fk: productionOrder.mold_fk ?? 0,
				description: productionOrder.description ?? "Sem descrição",
				mold_name: productionOrder.mold.name ?? "Nome de molde desconhecido",
				employee_name:
					productionOrder.employee.name ?? "Nome de funcionário desconhecido",
			}));

			return pOrders as [];
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async lastOrder(): Promise<LastOrderDTO> {
		const lastOrder = await this.prisma.production_Order.findFirst({
			orderBy: { production_order_id: "desc" },
			include: {
				mold: { select: { name: true } },
				employee: { select: { name: true } },
			},
		});

		if (lastOrder) {
			const lastOrderDTO: LastOrderDTO = {
				id: lastOrder.production_order_id,
				initial_counter: lastOrder.initial_counter,
				final_counter: lastOrder.final_counter ?? lastOrder.initial_counter,
				mold_quantity: lastOrder.mold_quantity,
				created_at: lastOrder.created_at,
				finished_at: lastOrder.finished_at ?? new Date(),
				description: lastOrder.description ?? "Sem descrição",
				mold_name: lastOrder.mold.name ?? "Nome de molde desconhecido",
				employee_name:
					lastOrder.employee.name ?? "Nome de funcionário desconhecido",
			};

			return lastOrderDTO;
		} else {
			const firstProductionOrder = {
				id: 0,
				initial_counter: 0,
				final_counter: 0,
				mold_quantity: 0,
				created_at: new Date(),
				finished_at: new Date(),
				description: "Sem descrição",
				mold_name: "Sem nome de molde",
				employee_name: "Sem nome de funcionário",
			};
			return firstProductionOrder;
		}
	}
	async show(id: number): Promise<ProductionOrder> {
		const productionOrder = await this.prisma.production_Order.findFirst({
			where: { production_order_id: id },
		});

		if (!productionOrder) {
			throw new Error("Nenhuma ProductionOrder encontrada.");
		}
		if (
			productionOrder.final_counter === null ||
			productionOrder.mold_fk === null ||
			productionOrder.employee_fk === null ||
			productionOrder.description === null
		) {
			throw new Error("Dados inválidos na ProductionOrder.");
		}

		return new ProductionOrder(
			productionOrder.production_order_id,
			productionOrder.initial_counter,
			productionOrder.final_counter,
			productionOrder.mold_quantity,
			productionOrder.created_at,
			productionOrder.finished_at ?? new Date(),
			productionOrder.employee_fk,
			productionOrder.mold_fk,
			productionOrder.description
		);
	}

	async delete(id: number): Promise<void> {
		try {
			await this.prisma.production_Order.delete({
				where: { production_order_id: id },
			});
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async update(
		productionOrder: UpdateProductionOrderDTO
	): Promise<ProductionOrder> {
		try {
			const { id, final_counter, employee_fk, mold_fk, finished_at } =
				productionOrder;

			const productionOrderUpdated = await this.prisma.production_Order.update({
				where: { production_order_id: id },
				data: {
					finished_at: finished_at,
					final_counter: final_counter,
					mold_quantity: final_counter - productionOrder.initial_counter,
					employee_fk: employee_fk,
					mold_fk: mold_fk,
				},
			});
			const nextOrder = await this.prisma.production_Order.findFirst({
				where: { production_order_id: id + 1 },
			});

			if (nextOrder?.initial_counter === null) {
				throw new Error("Dados inválidos na ProductionOrder.");
			}

			if (nextOrder?.initial_counter !== null) {
				await this.prisma.production_Order.update({
					where: { production_order_id: id + 1 },
					data: {
						initial_counter: productionOrderUpdated.final_counter
							? productionOrderUpdated.final_counter
							: 0,
					},
				});
			}

			if (
				productionOrderUpdated.final_counter === null ||
				productionOrderUpdated.mold_fk === null ||
				productionOrderUpdated.employee_fk === null ||
				productionOrderUpdated.description === null ||
				productionOrderUpdated.finished_at === null
			) {
				throw new Error("Dados inválidos na ProductionOrder.");
			}

			return new ProductionOrder(
				productionOrderUpdated.production_order_id,
				productionOrderUpdated.initial_counter,
				productionOrderUpdated.final_counter,
				productionOrderUpdated.mold_quantity,
				productionOrderUpdated.created_at,
				productionOrderUpdated.finished_at,
				productionOrderUpdated.employee_fk,
				productionOrderUpdated.mold_fk,
				productionOrderUpdated.description
			);
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async list(): Promise<ProductionOrder[]> {
		const productionOrders = await this.prisma.production_Order.findMany();

		if (productionOrders.length === 0) {
			throw new Error("Nenhuma ProductionOrder encontrada.");
		}

		return productionOrders.map(
			(productionOrder: any) =>
				new ProductionOrder(
					productionOrder.production_order_id,
					productionOrder.initial_counter,
					productionOrder.final_counter ?? productionOrder.initial_counter,
					productionOrder.mold_quantity,
					productionOrder.created_at,
					productionOrder.finished_at,
					productionOrder.employee_fk,
					productionOrder.mold_fk ?? 0,
					productionOrder.description ?? "Sem descrição"
				)
		);
	}
}
