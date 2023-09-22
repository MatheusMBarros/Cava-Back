import { Employee } from "../../../entities/Employee";
import { EmployeeRepository } from "../../../repositories/EmployeeRepository";

export class ListEmployees {
	private employeeRepository: EmployeeRepository;

	constructor(employeeRepository: EmployeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	async execute(): Promise<Employee[]> {
		const employees = await this.employeeRepository.findAll();
		if (!employees) {
			throw new Error("No employees found");
		}
		return employees;
	}
}
