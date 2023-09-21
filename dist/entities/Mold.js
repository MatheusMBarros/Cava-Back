"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mold = void 0;
class Mold {
    constructor(id, name, total_weight, channel_return_weight, channel_lost_percentage) {
        this.id = id;
        this.name = name;
        this.total_weight = total_weight;
        this.channel_return_weight = channel_return_weight;
        this.channel_lost_percentage = channel_lost_percentage;
        this.mold_aluminium_loss = Number((channel_return_weight * channel_lost_percentage).toFixed(3));
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.total_weight;
    }
    getChannelReturn() {
        return this.channel_return_weight;
    }
    getChannelLostPercentage() {
        return this.channel_lost_percentage;
    }
    getMoldAluminiulLoss() {
        return this.mold_aluminium_loss;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.total_weight = weight;
    }
    setChannelReturn(channel_return) {
        this.channel_return_weight = channel_return;
    }
    setChannelLostPercentage(channel_lost_percentage) {
        this.channel_lost_percentage = channel_lost_percentage / 100;
    }
    setTotalAluminiulLoss(mold_aluminium_loss) {
        this.mold_aluminium_loss = mold_aluminium_loss;
    }
}
exports.Mold = Mold;
//# sourceMappingURL=Mold.js.map