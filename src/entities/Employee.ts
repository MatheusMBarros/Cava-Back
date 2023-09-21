export class Employee {
	private id: number;
	private name: string;
	private sector: string;
	private password: string;

	constructor(id: number, name: string, password: string, sector: string) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.sector = sector;
	}

	public getId(): number {
		return this.id;
	}

	public getPassword(): string {
		return this.password;
	}

	public getName(): string {
		return this.name;
	}

	public getSector(): string {
		return this.sector;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public setPassword(password: string): void {
		this.password = password;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setSector(sector: string): void {
		this.sector = sector;
	}
}
