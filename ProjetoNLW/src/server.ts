import express, { response } from "express";//importamos a dependencia do express
import "./database";
import { routes } from "./routes"

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, ()=> console.log("The server is running on port 3333"));

