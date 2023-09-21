import express from "express";
import { CreateEmployeeController } from "./use-case/Employee-Use-Cases/CreateEmployee/CreateEmployeeController";
import { ReadEmployeeController } from "./use-case/Employee-Use-Cases/FindEmployee/ReadEmployeeController";
import { ListEmployeesController } from "./use-case/Employee-Use-Cases/ListEmployee/ListEmployeesController";
import { UpdateEmployeeController } from "./use-case/Employee-Use-Cases/UpdateEmployee/UpdateEmployeeController";
import { DeleteEmployeeController } from "./use-case/Employee-Use-Cases/DeleteEmployee/DeleteEmployeeController";
import { CreateMoldController } from "./use-case/Mold-Use-Cases/CreateMold/CreateMoldController";
import { FindMoldController } from "./use-case/Mold-Use-Cases/FindMold/FindMoldController";
import { ListMoldsController } from "./use-case/Mold-Use-Cases/ListMold/ListMoldsController";
import { DeleteMoldController } from "./use-case/Mold-Use-Cases/DeleteMold/DeleteMoldController";
import { UpdateMoldController } from "./use-case/Mold-Use-Cases/UpdateMold/UpdateMoldController";
import { CreatePieceController } from "./use-case/Piece-Use-Cases/CreatePiece/CreatePieceController";
import { FindPieceController } from "./use-case/Piece-Use-Cases/FindPiece/FindPieceController";
import { ListPieceController } from "./use-case/Piece-Use-Cases/ListPiece/ListPieceController";
import { UpdatePieceController } from "./use-case/Piece-Use-Cases/UpdatePiece/UpdatePieceController";
import { CreateMoldPieceController } from "./use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateMoldPieceController";
import { DeletePieceController } from "./use-case/Piece-Use-Cases/DeletePiece/DeletePieceController";
import { FindMoldPieceController } from "./use-case/MoldPiece-Use-Cases/FindMoldPiece/FindMoldPieceController";
import { UpdateMoldPieceController } from "./use-case/MoldPiece-Use-Cases/UpdateMoldPiece/UpdateMoldPieceController";
import { DeleteMoldPieceController } from "./use-case/MoldPiece-Use-Cases/DeleteMoldPiece/DeleteMoldPieceController";
import { ListMoldPiecesController } from "./use-case/MoldPiece-Use-Cases/ListMoldPiece/ListMoldPiecesController";
import { CreateProductionOrderController } from "./use-case/ProductionOrder-Use-Cases/CreateProductionOrder/CreateProductionOrderController";
import { ListProductionOrderController } from "./use-case/ProductionOrder-Use-Cases/ListProductionOrder/ListProductionOrderController";
import { FindProductionOrderController } from "./use-case/ProductionOrder-Use-Cases/FindProductionOrder/FindProductionOrderController";
import { DeleteProductionOrderController } from "./use-case/ProductionOrder-Use-Cases/DeleteProductionOrder/DeleteProductionOrderController";
import { LastOrderController } from "./use-case/ProductionOrder-Use-Cases/LastOrder/LastOrderController";
import { UpdateProductionOrderController } from "./use-case/ProductionOrder-Use-Cases/UpdateProductionOrder/UpdateProductionOrderController";
import { FindPiecesByMoldController } from "./use-case/MoldPiece-Use-Cases/FindPiecesByMold/FindPiecesByMoldController";
import { ListProductionOrdersWithNameController } from "./use-case/ProductionOrder-Use-Cases/ListProductionOrder/ListWithNames/ListProductionOrdersWhithNameController";
import { ReturnTotalAluminiumLostPerMoldController } from "./use-case/MoldPiece-Use-Cases/ReturnTotalAluminiumLostPerMold/ReturnTotalAluminiumLostPerMoldController";

const routes = express.Router();

// set cors to allow all origins
routes.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

//Employee routes
routes.post("/employee", (req, res) =>
	new CreateEmployeeController().execute(req, res)
);
routes.get("/employee/:id", (req, res) =>
	new ReadEmployeeController().execute(req, res)
);

routes.get("/employee", (req, res) => {
	new ListEmployeesController().execute(req, res);
});

routes.put("/employee/:id", (req, res) =>
	new UpdateEmployeeController().execute(req, res)
);
routes.delete("/employee/:id", (req, res) =>
	new DeleteEmployeeController().execute(req, res)
);

//Mold routes
routes.post("/mold", (req, res) =>
	new CreateMoldController().execute(req, res)
);
routes.get("/mold/:id", (req, res) =>
	new FindMoldController().execute(req, res)
);
routes.get("/mold", (req, res) => {
	new ListMoldsController().execute(req, res);
});
routes.put("/mold/:id", (req, res) =>
	new UpdateMoldController().execute(req, res)
);
routes.delete("/mold/:id", (req, res) => {
	new DeleteMoldController().execute(req, res);
});

//Piece routes
routes.post("/piece", (req, res) => {
	new CreatePieceController().execute(req, res);
});
routes.get("/piece/:id", (req, res) => {
	new FindPieceController().execute(req, res);
});
routes.delete("/piece/:id", (req, res) => {
	new DeletePieceController().execute(req, res);
});
routes.put("/piece/:id", (req, res) => {
	new UpdatePieceController().execute(req, res);
});
routes.get("/piece", (req, res) => {
	new ListPieceController().execute(req, res);
});

// moldPiece routes
routes.post("/moldPiece", (req, res) => {
	new CreateMoldPieceController().execute(req, res);
});
routes.get("/moldPiece/:id", (req, res) => {
	new FindMoldPieceController().execute(req, res);
});
routes.put("/moldPiece/:id", (req, res) => {
	new UpdateMoldPieceController().execute(req, res);
});
routes.delete("/moldPiece/:id", (req, res) => {
	new DeleteMoldPieceController().execute(req, res);
});
routes.get("/moldPiece", (req, res) => {
	new ListMoldPiecesController().execute(req, res);
});
routes.get("/moldParts/:mold_fk", (req, res) => {
	new FindPiecesByMoldController().execute(req, res);
});
routes.get("/aluminiumLoss/:mold_fk", (req, res) => {
	new ReturnTotalAluminiumLostPerMoldController().execute(req, res);
});

//productionOrder routes
routes.post("/productionOrder", (req, res) => {
	new CreateProductionOrderController().execute(req, res);
});
routes.get("/productionOrder/:id", (req, res) => {
	new FindProductionOrderController().execute(req, res);
});
routes.delete("/productionOrder/:id", (req, res) => {
	new DeleteProductionOrderController().execute(req, res);
});
routes.put("/productionOrder/:id", (req, res) => {
	new UpdateProductionOrderController().execute(req, res);
});
routes.get("/listProductionOrders", (req, res) => {
	new ListProductionOrderController().execute(req, res);
});
routes.get("/lastOrder", (req, res) => {
	new LastOrderController().execute(req, res);
});
routes.get("/productionOrder", (req, res) => {
	new ListProductionOrdersWithNameController().execute(req, res);
});

export default routes;
