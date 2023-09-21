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
exports.PrismaMoldRepository = void 0;
const Mold_1 = require("@/entities/Mold");
class PrismaMoldRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(mold) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, total_weight, channel_return_weight, channel_lost_percentage, } = mold;
            yield this.prisma.mold.create({
                data: {
                    name,
                    total_weight,
                    channel_return_weight,
                    channel_lost_percentage,
                    mold_aluminium_loss: Number((channel_return_weight * channel_lost_percentage).toFixed(3)),
                },
            });
        });
    }
    findByName(name) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.mold.delete({
                    where: {
                        mold_id: id,
                    },
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(updateMold) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mold_id, name, total_weight, channel_return_weight, channel_lost_percentage, } = updateMold;
                yield this.prisma.mold.update({
                    where: {
                        mold_id: mold_id,
                    },
                    data: {
                        name,
                        total_weight,
                        channel_return_weight,
                        channel_lost_percentage,
                    },
                });
                return new Mold_1.Mold(updateMold.mold_id, updateMold.name, updateMold.total_weight, updateMold.channel_return_weight, updateMold.channel_lost_percentage);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const mold = yield this.prisma.mold.findUnique({
                where: {
                    mold_id: id,
                },
            });
            if (!mold) {
                throw new Error("Mold not found");
            }
            return new Mold_1.Mold(mold.mold_id, mold.name, mold.total_weight, mold.channel_return_weight, mold.channel_lost_percentage);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const molds = yield this.prisma.mold.findMany();
                return molds.map((mold) => new Mold_1.Mold(mold.mold_id, mold.name, mold.total_weight, mold.channel_return_weight, mold.channel_lost_percentage));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.PrismaMoldRepository = PrismaMoldRepository;
//# sourceMappingURL=PrismaMoldRepository.js.map