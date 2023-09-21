import { Employee } from "../entities/Employee";
import { UpdateEmployeeDTO } from "@/use-case/Employee-Use-Cases/UpdateEmployee/UpdateEmployeeDTO";
import { CreateEmployeeDTO } from "@/use-case/Employee-Use-Cases/CreateEmployee/CreateEmployeeDTO";

export interface EmployeeRepository {
	findAll(): Promise<Employee[]>;
	findById(id: number): Promise<Employee>;
	create(employee: CreateEmployeeDTO): Promise<void>;
	delete(id: number): Promise<void>;
	update(employee: UpdateEmployeeDTO): Promise<Employee>;
}
