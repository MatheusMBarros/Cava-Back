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
exports.CreateEmployee = void 0;
class CreateEmployee {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    create({ name, password, sector }) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = {
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
            yield this.employeeRepository.create(employee);
        });
    }
}
exports.CreateEmployee = CreateEmployee;
//# sourceMappingURL=CreateEmployee.js.map