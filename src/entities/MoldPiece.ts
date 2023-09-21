export class MoldPiece {
	private id: number;
	private cavity: number;
	private mold_fk: number;
	private piece_fk: number;

	constructor(id: number, cavity: number, mold_fk: number, piece_fk: number) {
		this.id = id;
		this.cavity = cavity;
		this.mold_fk = mold_fk;
		this.piece_fk = piece_fk;
	}
	public getId(): number {
		return this.id;
	}

	public getCavity(): number {
		return this.cavity;
	}

	public getMoldFk(): number {
		return this.mold_fk;
	}

	public getPieceFk(): number {
		return this.piece_fk;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public setCavity(cavity: number): void {
		this.cavity = cavity;
	}

	public setMoldId(mold_fk: number): void {
		this.mold_fk = mold_fk;
	}

	public setPieceFk(piece_fk: number): void {
		this.piece_fk = piece_fk;
	}
}
