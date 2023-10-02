import express from "express";
import routes from "./routes";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3333;
console.log(process.env.DATABASE_URL);

app.use(express.json());
app.use(routes);
app.listen(port, () => {
	console.log("listening on port " + port);
});
