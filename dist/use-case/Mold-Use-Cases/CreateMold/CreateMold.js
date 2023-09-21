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
exports.CreateMold = void 0;
class CreateMold {
    constructor(moldRepository) {
        this.moldRepository = moldRepository;
    }
    create({ name, channel_return_weight, total_weight, channel_lost_percentage, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMold = {
                name,
                channel_return_weight,
                total_weight,
                channel_lost_percentage,
            };
            if (newMold.name.trim() === "" ||
                newMold.channel_return_weight === null ||
                newMold.total_weight === null ||
                newMold.channel_lost_percentage === null) {
                throw new Error("Verify if all fields are filled");
            }
            yield this.moldRepository.create(newMold);
        });
    }
}
exports.CreateMold = CreateMold;
//# sourceMappingURL=CreateMold.js.map