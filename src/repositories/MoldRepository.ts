import { Mold } from "../entities/Mold";
import { CreateMoldDTO } from "../use-case/Mold-Use-Cases/CreateMold/CreateMoldDTO";
import { UpdateMoldDTO } from "../use-case/Mold-Use-Cases/UpdateMold/UpdateMoldDTO";

export interface MoldRepository {
	create(mold: CreateMoldDTO): Promise<void>;
	findById(id: number): Promise<Mold>;
	update(updateMold: UpdateMoldDTO): Promise<Mold>;
	delete(id: number): Promise<void>;
	findAll(): Promise<Mold[]>;
}
