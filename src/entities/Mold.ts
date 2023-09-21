export class Mold {
	private id: number;
	private name: string;
	private total_weight: number;
	private channel_return_weight: number;
	private channel_lost_percentage: number;
	private mold_aluminium_loss: number;

	constructor(
		id: number,
		name: string,
		total_weight: number,
		channel_return_weight: number,
		channel_lost_percentage: number
	) {
		this.id = id;
		this.name = name;
		this.total_weight = total_weight;
		this.channel_return_weight = channel_return_weight;
		this.channel_lost_percentage = channel_lost_percentage;
		this.mold_aluminium_loss = Number(
			(channel_return_weight * channel_lost_percentage).toFixed(3)
		);
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getWeight(): number {
		return this.total_weight;
	}

	public getChannelReturn(): number {
		return this.channel_return_weight;
	}

	public getChannelLostPercentage(): number {
		return this.channel_lost_percentage;
	}

	public getMoldAluminiulLoss(): number {
		return this.mold_aluminium_loss;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setWeight(weight: number): void {
		this.total_weight = weight;
	}

	public setChannelReturn(channel_return: number): void {
		this.channel_return_weight = channel_return;
	}

	public setChannelLostPercentage(channel_lost_percentage: number): void {
		this.channel_lost_percentage = channel_lost_percentage / 100;
	}

	public setTotalAluminiulLoss(mold_aluminium_loss: number): void {
		this.mold_aluminium_loss = mold_aluminium_loss;
	}
}
