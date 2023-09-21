import { Request, Response } from "express";
import { CreateEmployee } from "./CreateEmployee";
import { PrismaEmployeeRepository } from "@/repositories/PrismaRepository/PrismaEmployeeRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";

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
