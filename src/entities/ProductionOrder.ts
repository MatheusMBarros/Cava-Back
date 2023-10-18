export class ProductionOrder {
	private id: number;
	private initial_counter: number;
	private final_counter: number;
	private quantity: number;
	private created_at: Date;
	private updated_at: Date;
	private employee_fk: number;
	private mold_fk: number;
	private description: string;

	constructor(
		id: number,
		initial_counter: number,
		final_counter: number,
		quantity: number,
		created_at: Date,
		updated_at: Date,
		employee_fk: number,
		mold_fk: number,
		description: string
	) {
		this.id = id;
		this.initial_counter = initial_counter;
		this.final_counter = final_counter;
		this.quantity = quantity;
		this.created_at = created_at ;
		this.updated_at = updated_at;
		this.employee_fk = employee_fk;
		this.mold_fk = mold_fk;
		this.description = description;
	}

	public getId(): number {
		return this.id;
	}
	public getDescription(): string {
		return this.description;
	}

	public getInitialCounter(): number {
		return this.initial_counter;
	}

	public getFinalCounter(): number {
		return this.final_counter;
	}

	public getQuantity(): number {
		return this.quantity;
	}

	public getCreatedAt(): Date {
		return this.created_at;
	}

	public getUpdatedAt(): Date {
		return this.updated_at;
	}

	public getEmployeeFk(): number {
		return this.employee_fk;
	}

	public getMoldId(): number {
		return this.mold_fk;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public setDescription(description: string): void {
		this.description = description;
	}

	public setInitialCounter(initial_counter: number): void {
		this.initial_counter = initial_counter;
	}

	public setFinalCounter(final_counter: number): void {
		this.final_counter = final_counter;
	}

	public setQuantity(quantity: number): void {
		this.quantity = quantity;
	}

	public setCreatedAt(created_at: Date): void {
		this.created_at = created_at;
	}

	public setUpdatedAt(updated_at: Date): void {
		this.updated_at = updated_at;
	}

	public setEmployeeFk(employee_fk: number): void {
		this.employee_fk = employee_fk;
	}

	public setMoldId(mold_fk: number): void {
		this.mold_fk = mold_fk;
	}
}
