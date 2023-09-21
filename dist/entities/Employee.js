"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(id, name, password, sector) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.sector = sector;
    }
    getId() {
        return this.id;
    }
    getPassword() {
        return this.password;
    }
    getName() {
        return this.name;
    }
    getSector() {
        return this.sector;
    }
    setId(id) {
        this.id = id;
    }
    setPassword(password) {
        this.password = password;
    }
    setName(name) {
        this.name = name;
    }
    setSector(sector) {
        this.sector = sector;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map