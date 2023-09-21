import { Request, Response } from "express";
import { ListEmployees } from "./ListEmployees";
import { PrismaEmployeeRepository } from "@/repositories/PrismaRepository/PrismaEmployeeRepository";
import prismaInstance from "@/prisma/PrismaSingletonInstance";

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
