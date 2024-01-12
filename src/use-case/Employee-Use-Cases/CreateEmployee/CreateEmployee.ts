import { EmployeeRepository } from "../../../repositories/EmployeeRepository";
import { CreateEmployeeDTO } from "./CreateEmployeeDTO";

type CreateEmployeeRequest = {
	name: string;
	sector: string;
	password: string;
};

export class CreateEmployee {  
	private employeeRepository: EmployeeRepository;

	constructor(employeeRepository: EmployeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	async create({ name, password, sector }: CreateEmployeeRequest) {
		const employee: CreateEmployeeDTO = {
			name,
			password,
			sector,
		};
		if (!name) {
			throw new Error("Name is mandatory");
		}
		if (name.trim() === "") {
			throw new Error("Please, insert a valid name!");
		}
		if (!sector) {
			throw new Error("Sector is mandatory");
		}
		if (!password) {
			throw new Error("password is mandatory");
		}

		await this.employeeRepository.create(employee);
	}
}
