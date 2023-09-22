import { Request, Response } from "express";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaEmployeeRepository } from "../../../repositories/PrismaRepository/PrismaEmployeeRepository";
import { ReadEmployee } from "./ReadEmployee";


export class ReadEmployeeController {
	private readEmployee: ReadEmployee;

	constructor() {
		this.readEmployee = new ReadEmployee(
			new PrismaEmployeeRepository(prismaInstance)
		);
	}

	async execute(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const employee = await this.readEmployee.read(Number(id));
			return res.status(200).json(employee);
		} catch (error: any) {
			return res
				.status(400)
				.json({ message: error.message || "Unexpected error." });
		}
	}
}
