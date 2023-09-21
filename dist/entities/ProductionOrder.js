"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionOrder = void 0;
class ProductionOrder {
    constructor(id, initial_counter, final_counter, quantity, created_at, updated_at, employee_fk, mold_fk, description) {
        this.id = id;
        this.initial_counter = initial_counter;
        this.final_counter = final_counter;
        this.quantity = quantity;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.employee_fk = employee_fk;
        this.mold_fk = mold_fk;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getDescription() {
        return this.description;
    }
    getInitialCounter() {
        return this.initial_counter;
    }
    getFinalCounter() {
        return this.final_counter;
    }
    getQuantity() {
        return this.quantity;
    }
    getCreatedAt() {
        return this.created_at;
    }
    getUpdatedAt() {
        return this.updated_at;
    }
    getEmployeeFk() {
        return this.employee_fk;
    }
    getMoldId() {
        return this.mold_fk;
    }
    setId(id) {
        this.id = id;
    }
    setDescription(description) {
        this.description = description;
    }
    setInitialCounter(initial_counter) {
        this.initial_counter = initial_counter;
    }
    setFinalCounter(final_counter) {
        this.final_counter = final_counter;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
    setEmployeeFk(employee_fk) {
        this.employee_fk = employee_fk;
    }
    setMoldId(mold_fk) {
        this.mold_fk = mold_fk;
    }
}
exports.ProductionOrder = ProductionOrder;
//# sourceMappingURL=ProductionOrder.js.map