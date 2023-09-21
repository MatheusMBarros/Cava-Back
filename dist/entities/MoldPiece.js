"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoldPiece = void 0;
class MoldPiece {
    constructor(id, cavity, mold_fk, piece_fk) {
        this.id = id;
        this.cavity = cavity;
        this.mold_fk = mold_fk;
        this.piece_fk = piece_fk;
    }
    getId() {
        return this.id;
    }
    getCavity() {
        return this.cavity;
    }
    getMoldFk() {
        return this.mold_fk;
    }
    getPieceFk() {
        return this.piece_fk;
    }
    setId(id) {
        this.id = id;
    }
    setCavity(cavity) {
        this.cavity = cavity;
    }
    setMoldId(mold_fk) {
        this.mold_fk = mold_fk;
    }
    setPieceFk(piece_fk) {
        this.piece_fk = piece_fk;
    }
}
exports.MoldPiece = MoldPiece;
//# sourceMappingURL=MoldPiece.js.map