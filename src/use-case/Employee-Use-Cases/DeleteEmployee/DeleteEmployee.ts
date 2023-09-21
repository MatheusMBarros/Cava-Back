import { EmployeeRepository } from "@/repositories/EmployeeRepository";

export class DeleteEmployee {
  private employeeRepository: EmployeeRepository;
  constructor(employeeRepository: EmployeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async delete(id: number) {
    if (!id) {
      throw new Error("Id is mandatory");
    }
    return await this.employeeRepository.delete(id);
  }
}
