"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    constructor(id, name, handle_type, size, gross_weight, net_weight, splinter_lost_percentage) {
        this.id = id;
        this.name = name;
        this.handle_type = handle_type;
        this.size = size;
        this.gross_weight = gross_weight;
        this.net_weight = net_weight;
        this.splinter_lost_percentage = splinter_lost_percentage;
        this.splinter = splinter_lost_percentage * (gross_weight - net_weight);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    getGrossWeight() {
        return this.gross_weight;
    }
    getNetWeight() {
        return this.net_weight;
    }
    getHandleType() {
        return this.handle_type;
    }
    getSplinterLostPercentage() {
        return this.splinter_lost_percentage;
    }
    setGrossWeight(gross_weight) {
        this.gross_weight = gross_weight;
    }
    setNetWeight(net_weight) {
        this.net_weight = net_weight;
    }
    setHandleType(handle_type) {
        this.handle_type = handle_type;
    }
    setSplinterLostPercentage(splinter_lost_percentage) {
        this.splinter_lost_percentage = splinter_lost_percentage;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setSize(size) {
        this.size = size;
    }
}
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map