import { EmployeeRepository } from "../../../repositories/EmployeeRepository";

interface UpdateEmployeeRequest {
	id: number;
	name: string;
	sector: string;
	password: string;
}

export class UpdateEmployee {
	private employeeRepository: EmployeeRepository;
	constructor(employeeRepository: EmployeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	async update({ id, name, sector, password }: UpdateEmployeeRequest) {
		const updatedEmployee: UpdateEmployeeRequest = {
			id,
			name,
			sector,
			password,
		};
		if (!id) {
			throw new Error("Id is mandatory");
		}
		return await this.employeeRepository.update(updatedEmployee);
	}
}
