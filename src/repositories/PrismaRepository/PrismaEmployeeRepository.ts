import { PrismaClient } from "@prisma/client";
import { Employee } from "../../entities/Employee";
import { CreateEmployeeDTO } from "../../use-case/Employee-Use-Cases/CreateEmployee/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../../use-case/Employee-Use-Cases/UpdateEmployee/UpdateEmployeeDTO";
import { EmployeeRepository } from "../EmployeeRepository";

export class PrismaEmployeeRepository implements EmployeeRepository {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}
	async create(employee: CreateEmployeeDTO): Promise<void> {
		const { name, password, sector } = employee;

		await this.prisma.employee.create({
			data: {
				name,
				password,
				sector,
			},
		});
	}

	async findById(id: number): Promise<Employee> {
		const employee = await this.prisma.employee.findUnique({
			where: {
				employee_id: id,
			},
		});

		if (!employee) {
			throw new Error("Employee not found");
		}
		return new Employee(
			employee.employee_id,
			employee.name,
			employee.password,
			employee.sector
		);
	}

	async findAll(): Promise<Employee[]> {
		const employees = await this.prisma.employee.findMany();

		return employees.map((employee: any) => {
			return new Employee(
				employee.employee_id,
			employee.name,
			employee.password,
			employee.sector
			);
		});
	}

	async delete(id: number): Promise<void> {
		try {
			await this.prisma.employee.delete({
				where: {
					employee_id: id,
				},
			});
		} catch (error) {
			throw new Error("Could not delete employee");
		}
	}
	async update(employee: UpdateEmployeeDTO): Promise<Employee> {
		const employeeUpdated = await this.prisma.employee.update({
			where: {
				employee_id: employee.id,
			},
			data: {
				name: employee.name,
				password: employee.password,
				sector: employee.sector,
			},
		});

		return new Employee(
			employeeUpdated.employee_id,
			employeeUpdated.name,
			employeeUpdated.password,
			employeeUpdated.sector
		);
	}
}
