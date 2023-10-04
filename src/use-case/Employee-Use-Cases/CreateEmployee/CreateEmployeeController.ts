import { Request, Response } from "express";
import { CreateEmployee } from "./CreateEmployee";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaEmployeeRepository } from "../../../repositories/PrismaRepository/PrismaEmployeeRepository";

export class CreateEmployeeController {
	private createEmployee: CreateEmployee;

	constructor() {
		this.createEmployee = new CreateEmployee(
			new PrismaEmployeeRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const { name, sector, password } = req.body;
			const employee = {
				name,
				sector,
				password,
			};
			await this.createEmployee.create(employee);
			return res.status(201).send();
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Something went wrong",
			});
		}
	}
}
