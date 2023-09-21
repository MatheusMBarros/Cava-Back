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
exports.PrismaProductionOrderRepository = void 0;
const ProductionOrder_1 = require("@/entities/ProductionOrder");
const FormaterData_1 = require("@/utils/FormaterData");
class PrismaProductionOrderRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(productionOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { initial_counter, final_counter, employee_fk, mold_fk, description, } = productionOrder;
                const dataAtual = new Date();
                const dataFormatada = (0, FormaterData_1.formatData)(dataAtual);
                if (description === null) {
                    throw new Error("Descrição não pode ser nula.");
                }
                yield this.prisma.production_Order.create({
                    data: {
                        initial_counter: initial_counter,
                        final_counter: final_counter,
                        mold_quantity: final_counter - initial_counter,
                        created_at: dataFormatada,
                        updated_at: dataFormatada,
                        employee_fk: employee_fk,
                        mold_fk: mold_fk,
                        description: description,
                    },
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    listWithEmployeeNameAndMoldName() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productionOrders = yield this.prisma.production_Order.findMany({
                    include: {
                        mold: { select: { name: true } },
                        employee: { select: { name: true } },
                    },
                });
                if (productionOrders.length === 0) {
                    throw new Error("Nenhuma ProductionOrder encontrada.");
                }
                const pOrders = productionOrders.map((productionOrder) => {
                    var _a, _b, _c, _d, _e;
                    return ({
                        id: productionOrder.production_order_id,
                        initial_counter: productionOrder.initial_counter,
                        final_counter: (_a = productionOrder.final_counter) !== null && _a !== void 0 ? _a : productionOrder.initial_counter,
                        quantity: productionOrder.mold_quantity,
                        created_at: productionOrder.created_at,
                        updated_at: productionOrder.updated_at,
                        employee_fk: productionOrder.employee_fk,
                        mold_fk: (_b = productionOrder.mold_fk) !== null && _b !== void 0 ? _b : 0,
                        description: (_c = productionOrder.description) !== null && _c !== void 0 ? _c : "Sem descrição",
                        mold_name: (_d = productionOrder.mold.name) !== null && _d !== void 0 ? _d : "Nome de molde desconhecido",
                        employee_name: (_e = productionOrder.employee.name) !== null && _e !== void 0 ? _e : "Nome de funcionário desconhecido",
                    });
                });
                return pOrders;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    lastOrder() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const lastOrder = yield this.prisma.production_Order.findFirst({
                orderBy: { production_order_id: "desc" },
                include: {
                    mold: { select: { name: true } },
                    employee: { select: { name: true } },
                },
            });
            if (lastOrder) {
                const lastOrderDTO = {
                    id: lastOrder.production_order_id,
                    initial_counter: lastOrder.initial_counter,
                    final_counter: (_a = lastOrder.final_counter) !== null && _a !== void 0 ? _a : lastOrder.initial_counter,
                    mold_quantity: lastOrder.mold_quantity,
                    created_at: lastOrder.created_at,
                    updated_at: lastOrder.updated_at,
                    description: (_b = lastOrder.description) !== null && _b !== void 0 ? _b : "Sem descrição",
                    mold_name: (_c = lastOrder.mold.name) !== null && _c !== void 0 ? _c : "Nome de molde desconhecido",
                    employee_name: (_d = lastOrder.employee.name) !== null && _d !== void 0 ? _d : "Nome de funcionário desconhecido",
                };
                return lastOrderDTO;
            }
            else {
                const firstProductionOrder = {
                    id: 0,
                    initial_counter: 0,
                    final_counter: 0,
                    mold_quantity: 0,
                    created_at: new Date(),
                    updated_at: new Date(),
                    description: "Sem descrição",
                    mold_name: "Sem nome de molde",
                    employee_name: "Sem nome de funcionário",
                };
                return firstProductionOrder;
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productionOrder = yield this.prisma.production_Order.findFirst({
                where: { production_order_id: id },
            });
            if (!productionOrder) {
                throw new Error("Nenhuma ProductionOrder encontrada.");
            }
            if (productionOrder.final_counter === null ||
                productionOrder.mold_fk === null ||
                productionOrder.employee_fk === null ||
                productionOrder.description === null) {
                throw new Error("Dados inválidos na ProductionOrder.");
            }
            return new ProductionOrder_1.ProductionOrder(productionOrder.production_order_id, productionOrder.initial_counter, productionOrder.final_counter, productionOrder.mold_quantity, productionOrder.created_at, productionOrder.updated_at, productionOrder.employee_fk, productionOrder.mold_fk, productionOrder.description);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.production_Order.delete({
                    where: { production_order_id: id },
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(productionOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, final_counter, employee_fk, mold_fk } = productionOrder;
                const updatedTime = new Date();
                const dataFormatada = (0, FormaterData_1.formatData)(updatedTime);
                const productionOrderUpdated = yield this.prisma.production_Order.update({
                    where: { production_order_id: id },
                    data: {
                        updated_at: dataFormatada,
                        final_counter: final_counter,
                        mold_quantity: final_counter - productionOrder.initial_counter,
                        employee_fk: employee_fk,
                        mold_fk: mold_fk,
                    },
                });
                const nextOrder = yield this.prisma.production_Order.findFirst({
                    where: { production_order_id: id + 1 },
                });
                if ((nextOrder === null || nextOrder === void 0 ? void 0 : nextOrder.initial_counter) === null) {
                    throw new Error("Dados inválidos na ProductionOrder.");
                }
                if ((nextOrder === null || nextOrder === void 0 ? void 0 : nextOrder.initial_counter) !== null) {
                    yield this.prisma.production_Order.update({
                        where: { production_order_id: id + 1 },
                        data: {
                            initial_counter: productionOrderUpdated.final_counter
                                ? productionOrderUpdated.final_counter
                                : 0,
                        },
                    });
                }
                if (productionOrderUpdated.final_counter === null ||
                    productionOrderUpdated.mold_fk === null ||
                    productionOrderUpdated.employee_fk === null ||
                    productionOrderUpdated.description === null) {
                    throw new Error("Dados inválidos na ProductionOrder.");
                }
                return new ProductionOrder_1.ProductionOrder(productionOrderUpdated.production_order_id, productionOrderUpdated.initial_counter, productionOrderUpdated.final_counter, productionOrderUpdated.mold_quantity, productionOrderUpdated.created_at, productionOrderUpdated.updated_at, productionOrderUpdated.employee_fk, productionOrderUpdated.mold_fk, productionOrderUpdated.description);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const productionOrders = yield this.prisma.production_Order.findMany();
            if (productionOrders.length === 0) {
                throw new Error("Nenhuma ProductionOrder encontrada.");
            }
            return productionOrders.map((productionOrder) => {
                var _a, _b, _c;
                return new ProductionOrder_1.ProductionOrder(productionOrder.production_order_id, productionOrder.initial_counter, (_a = productionOrder.final_counter) !== null && _a !== void 0 ? _a : productionOrder.initial_counter, productionOrder.mold_quantity, productionOrder.created_at, productionOrder.updated_at, productionOrder.employee_fk, (_b = productionOrder.mold_fk) !== null && _b !== void 0 ? _b : 0, (_c = productionOrder.description) !== null && _c !== void 0 ? _c : "Sem descrição");
            });
        });
    }
}
exports.PrismaProductionOrderRepository = PrismaProductionOrderRepository;
//# sourceMappingURL=PrismaProductionOrderRepository.js.map