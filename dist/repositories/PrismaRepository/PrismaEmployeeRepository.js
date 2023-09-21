"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaEmployeeRepository = void 0;
const Employee_1 = require("@/entities/Employee");
class PrismaEmployeeRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password, sector } = employee;
            yield this.prisma.employee.create({
                data: {
                    name,
                    password,
                    sector,
                },
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.prisma.employee.findUnique({
                where: {
                    employee_id: id,
                },
            });
            if (!employee) {
                throw new Error("Employee not found");
            }
            return new Employee_1.Employee(employee.employee_id, employee.name, employee.password, employee.sector);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield this.prisma.employee.findMany();
            return employees.map((employee) => {
                return new Employee_1.Employee(employee.employee_id, employee.name, employee.password, employee.sector);
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.employee.delete({
                    where: {
                        employee_id: id,
                    },
                });
            }
            catch (error) {
                throw new Error("Could not delete employee");
            }
        });
    }
    update(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeUpdated = yield this.prisma.employee.update({
                where: {
                    employee_id: employee.id,
                },
                data: {
                    name: employee.name,
                    password: employee.password,
                    sector: employee.sector,
                },
            });
            return new Employee_1.Employee(employeeUpdated.employee_id, employeeUpdated.name, employeeUpdated.password, employeeUpdated.sector);
        });
    }
}
exports.PrismaEmployeeRepository = PrismaEmployeeRepository;
//# sourceMappingURL=PrismaEmployeeRepository.js.map