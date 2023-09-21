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
exports.FindMold = void 0;
class FindMold {
    constructor(moldRepository) {
        this.moldRepository = moldRepository;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Mold id is required");
            }
            return yield this.moldRepository.findById(id);
        });
    }
}
exports.FindMold = FindMold;
//# sourceMappingURL=FindMold.js.map