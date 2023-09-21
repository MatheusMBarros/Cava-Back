export interface UpdateProductionOrderDTO {
	id: number;
	final_counter: number;
	initial_counter: number;
	employee_fk: number;
	mold_fk: number;
	updated_at: Date;
	quantity: number;
	description: string;
}
