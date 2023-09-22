import { EmployeeRepository } from "../../../repositories/EmployeeRepository";

export class ReadEmployee {
  private employeeRepository: EmployeeRepository;

  constructor(operatorRepository: EmployeeRepository) {
    this.employeeRepository = operatorRepository;
  }
  async read(id: number) {
    if (id === null) {
      throw new Error("Id not found");
    }
    if (!id) {
      throw new Error("Id not found");
    }
    return await this.employeeRepository.findById(id);
  }
}
