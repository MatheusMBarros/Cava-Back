export class Piece {
	private id: number;
	private name: string;
	private handle_type: string;
	private size: number;
	private gross_weight: number;
	private net_weight: number;
	private splinter_lost_percentage: number;
	private splinter: number;

	constructor(
		id: number,
		name: string,
		handle_type: string,
		size: number,
		gross_weight: number,
		net_weight: number,
		splinter_lost_percentage: number
	) {
		this.id = id;
		this.name = name;
		this.handle_type = handle_type;
		this.size = size;
		this.gross_weight = gross_weight;
		this.net_weight = net_weight;
		this.splinter_lost_percentage = splinter_lost_percentage;
		this.splinter = splinter_lost_percentage * (gross_weight - net_weight);
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getSize(): number {
		return this.size;
	}

	public getGrossWeight(): number {
		return this.gross_weight;
	}

	public getNetWeight(): number {
		return this.net_weight;
	}

	public getHandleType(): string {
		return this.handle_type;
	}

	public getSplinterLostPercentage(): number {
		return this.splinter_lost_percentage;
	}

	public setGrossWeight(gross_weight: number): void {
		this.gross_weight = gross_weight;
	}

	public setNetWeight(net_weight: number): void {
		this.net_weight = net_weight;
	}

	public setHandleType(handle_type: string): void {
		this.handle_type = handle_type;
	}

	public setSplinterLostPercentage(splinter_lost_percentage: number): void {
		this.splinter_lost_percentage = splinter_lost_percentage;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setSize(size: number): void {
		this.size = size;
	}
}
