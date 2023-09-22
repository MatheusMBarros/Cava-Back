import { Request, Response } from "express";
import { ListEmployees } from "./ListEmployees";
import prismaInstance from "../../../prisma/PrismaSingletonInstance";
import { PrismaEmployeeRepository } from "../../../repositories/PrismaRepository/PrismaEmployeeRepository";

export class ListEmployeesController {
	private listEmployees: ListEmployees;
	constructor() {
		this.listEmployees = new ListEmployees(
			new PrismaEmployeeRepository(prismaInstance)
		);
	}
	async execute(req: Request, res: Response): Promise<Response> {
		try {
			const employees = await this.listEmployees.execute();
			return res.status(200).json(employees);
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
