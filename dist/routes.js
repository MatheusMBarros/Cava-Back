"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateEmployeeController_1 = require("./use-case/Employee-Use-Cases/CreateEmployee/CreateEmployeeController");
const ReadEmployeeController_1 = require("./use-case/Employee-Use-Cases/FindEmployee/ReadEmployeeController");
const ListEmployeesController_1 = require("./use-case/Employee-Use-Cases/ListEmployee/ListEmployeesController");
const UpdateEmployeeController_1 = require("./use-case/Employee-Use-Cases/UpdateEmployee/UpdateEmployeeController");
const DeleteEmployeeController_1 = require("./use-case/Employee-Use-Cases/DeleteEmployee/DeleteEmployeeController");
const CreateMoldController_1 = require("./use-case/Mold-Use-Cases/CreateMold/CreateMoldController");
const FindMoldController_1 = require("./use-case/Mold-Use-Cases/FindMold/FindMoldController");
const ListMoldsController_1 = require("./use-case/Mold-Use-Cases/ListMold/ListMoldsController");
const DeleteMoldController_1 = require("./use-case/Mold-Use-Cases/DeleteMold/DeleteMoldController");
const UpdateMoldController_1 = require("./use-case/Mold-Use-Cases/UpdateMold/UpdateMoldController");
const CreatePieceController_1 = require("./use-case/Piece-Use-Cases/CreatePiece/CreatePieceController");
const FindPieceController_1 = require("./use-case/Piece-Use-Cases/FindPiece/FindPieceController");
const ListPieceController_1 = require("./use-case/Piece-Use-Cases/ListPiece/ListPieceController");
const UpdatePieceController_1 = require("./use-case/Piece-Use-Cases/UpdatePiece/UpdatePieceController");
const CreateMoldPieceController_1 = require("./use-case/MoldPiece-Use-Cases/CreateMoldPiece/CreateMoldPieceController");
const DeletePieceController_1 = require("./use-case/Piece-Use-Cases/DeletePiece/DeletePieceController");
const FindMoldPieceController_1 = require("./use-case/MoldPiece-Use-Cases/FindMoldPiece/FindMoldPieceController");
const UpdateMoldPieceController_1 = require("./use-case/MoldPiece-Use-Cases/UpdateMoldPiece/UpdateMoldPieceController");
const DeleteMoldPieceController_1 = require("./use-case/MoldPiece-Use-Cases/DeleteMoldPiece/DeleteMoldPieceController");
const ListMoldPiecesController_1 = require("./use-case/MoldPiece-Use-Cases/ListMoldPiece/ListMoldPiecesController");
const CreateProductionOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/CreateProductionOrder/CreateProductionOrderController");
const ListProductionOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/ListProductionOrder/ListProductionOrderController");
const FindProductionOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/FindProductionOrder/FindProductionOrderController");
const DeleteProductionOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/DeleteProductionOrder/DeleteProductionOrderController");
const LastOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/LastOrder/LastOrderController");
const UpdateProductionOrderController_1 = require("./use-case/ProductionOrder-Use-Cases/UpdateProductionOrder/UpdateProductionOrderController");
const FindPiecesByMoldController_1 = require("./use-case/MoldPiece-Use-Cases/FindPiecesByMold/FindPiecesByMoldController");
const ListProductionOrdersWhithNameController_1 = require("./use-case/ProductionOrder-Use-Cases/ListProductionOrder/ListWithNames/ListProductionOrdersWhithNameController");
const ReturnTotalAluminiumLostPerMoldController_1 = require("./use-case/MoldPiece-Use-Cases/ReturnTotalAluminiumLostPerMold/ReturnTotalAluminiumLostPerMoldController");
const routes = express_1.default.Router();
// set cors to allow all origins
routes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
//Employee routes
routes.post("/employee", (req, res) => new CreateEmployeeController_1.CreateEmployeeController().execute(req, res));
routes.get("/employee/:id", (req, res) => new ReadEmployeeController_1.ReadEmployeeController().execute(req, res));
routes.get("/employee", (req, res) => {
    new ListEmployeesController_1.ListEmployeesController().execute(req, res);
});
routes.put("/employee/:id", (req, res) => new UpdateEmployeeController_1.UpdateEmployeeController().execute(req, res));
routes.delete("/employee/:id", (req, res) => new DeleteEmployeeController_1.DeleteEmployeeController().execute(req, res));
//Mold routes
routes.post("/mold", (req, res) => new CreateMoldController_1.CreateMoldController().execute(req, res));
routes.get("/mold/:id", (req, res) => new FindMoldController_1.FindMoldController().execute(req, res));
routes.get("/mold", (req, res) => {
    new ListMoldsController_1.ListMoldsController().execute(req, res);
});
routes.put("/mold/:id", (req, res) => new UpdateMoldController_1.UpdateMoldController().execute(req, res));
routes.delete("/mold/:id", (req, res) => {
    new DeleteMoldController_1.DeleteMoldController().execute(req, res);
});
//Piece routes
routes.post("/piece", (req, res) => {
    new CreatePieceController_1.CreatePieceController().execute(req, res);
});
routes.get("/piece/:id", (req, res) => {
    new FindPieceController_1.FindPieceController().execute(req, res);
});
routes.delete("/piece/:id", (req, res) => {
    new DeletePieceController_1.DeletePieceController().execute(req, res);
});
routes.put("/piece/:id", (req, res) => {
    new UpdatePieceController_1.UpdatePieceController().execute(req, res);
});
routes.get("/piece", (req, res) => {
    new ListPieceController_1.ListPieceController().execute(req, res);
});
// moldPiece routes
routes.post("/moldPiece", (req, res) => {
    new CreateMoldPieceController_1.CreateMoldPieceController().execute(req, res);
});
routes.get("/moldPiece/:id", (req, res) => {
    new FindMoldPieceController_1.FindMoldPieceController().execute(req, res);
});
routes.put("/moldPiece/:id", (req, res) => {
    new UpdateMoldPieceController_1.UpdateMoldPieceController().execute(req, res);
});
routes.delete("/moldPiece/:id", (req, res) => {
    new DeleteMoldPieceController_1.DeleteMoldPieceController().execute(req, res);
});
routes.get("/moldPiece", (req, res) => {
    new ListMoldPiecesController_1.ListMoldPiecesController().execute(req, res);
});
routes.get("/moldParts/:mold_fk", (req, res) => {
    new FindPiecesByMoldController_1.FindPiecesByMoldController().execute(req, res);
});
routes.get("/aluminiumLoss/:mold_fk", (req, res) => {
    new ReturnTotalAluminiumLostPerMoldController_1.ReturnTotalAluminiumLostPerMoldController().execute(req, res);
});
//productionOrder routes
routes.post("/productionOrder", (req, res) => {
    new CreateProductionOrderController_1.CreateProductionOrderController().execute(req, res);
});
routes.get("/productionOrder/:id", (req, res) => {
    new FindProductionOrderController_1.FindProductionOrderController().execute(req, res);
});
routes.delete("/productionOrder/:id", (req, res) => {
    new DeleteProductionOrderController_1.DeleteProductionOrderController().execute(req, res);
});
routes.put("/productionOrder/:id", (req, res) => {
    new UpdateProductionOrderController_1.UpdateProductionOrderController().execute(req, res);
});
routes.get("/listProductionOrders", (req, res) => {
    new ListProductionOrderController_1.ListProductionOrderController().execute(req, res);
});
routes.get("/lastOrder", (req, res) => {
    new LastOrderController_1.LastOrderController().execute(req, res);
});
routes.get("/productionOrder", (req, res) => {
    new ListProductionOrdersWhithNameController_1.ListProductionOrdersWithNameController().execute(req, res);
});
exports.default = routes;
//# sourceMappingURL=routes.js.map