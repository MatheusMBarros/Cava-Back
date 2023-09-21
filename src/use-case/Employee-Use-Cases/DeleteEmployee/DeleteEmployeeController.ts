import prismaInstance from "@/prisma/PrismaSingletonInstance";
import { DeleteEmployee } from "./DeleteEmployee";
import { PrismaEmployeeRepository } from "@/repositories/PrismaRepository/PrismaEmployeeRepository";
import { Request, Response } from "express";

export class DeleteEmployeeController {
	private deleteEmployee: DeleteEmployee;

	constructor() {
		this.deleteEmployee = new DeleteEmployee(
			new PrismaEmployeeRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			await this.deleteEmployee.delete(Number(id));
			return res.status(200).send();
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
