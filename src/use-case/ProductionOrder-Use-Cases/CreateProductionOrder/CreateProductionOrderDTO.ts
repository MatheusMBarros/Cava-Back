export interface CreateProductionOrderDTO {
	initial_counter: number;
	final_counter: number;
	created_at: Date;
	finished_at: Date;
	mold_fk: number;
	employee_fk: number;
	description: string;
}
