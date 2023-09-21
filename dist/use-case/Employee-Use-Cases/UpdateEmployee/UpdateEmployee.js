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
exports.UpdateEmployee = void 0;
class UpdateEmployee {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    update({ id, name, sector, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEmployee = {
                id,
                name,
                sector,
                password,
            };
            if (!id) {
                throw new Error("Id is mandatory");
            }
            return yield this.employeeRepository.update(updatedEmployee);
        });
    }
}
exports.UpdateEmployee = UpdateEmployee;
//# sourceMappingURL=UpdateEmployee.js.map