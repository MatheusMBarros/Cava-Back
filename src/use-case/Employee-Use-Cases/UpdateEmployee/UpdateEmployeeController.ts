import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { Request, Response } from "express";
import { UpdateEmployee } from "./UpdateEmployee";
import { PrismaEmployeeRepository } from "../../../repositories/PrismaRepository/PrismaEmployeeRepository";

export class UpdateEmployeeController {
	private updateEmployee: UpdateEmployee;

	constructor() {
		this.updateEmployee = new UpdateEmployee(
			new PrismaEmployeeRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { name, password, sector } = req.body;
			const { id } = req.params;
			const updatedEmployee = {
				id: Number(id),
				name,
				sector,
				password,
			};
			const employee = await this.updateEmployee.update(updatedEmployee);
			return res.status(201).json(employee);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
