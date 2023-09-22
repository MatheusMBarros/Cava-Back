import express from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 10000;
console.log(port);

app.use(express.json());
app.use(routes);
app.listen(port, () => {
	console.log("listening on port " + port);
});
