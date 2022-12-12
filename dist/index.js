"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const correos_routes_1 = require("./routes/correos.routes");
//import * as routes from "./routes";
dotenv_1.default.config();
console.clear();
const port = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use((req, res, next) => {
    //res.header('Access-Control-Allow-Origin', 'http://192.168.0.173:8080'); //Con este damos acceso a la api unicamente desde el dominio que se ponga.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, x_token ,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(express_1.default.json());
//URL-----------
app.use("/api", correos_routes_1.correo_route);
//--------------
app.get("/", (req, res) => {
    res.send("API funcionado en sincronia");
});
app.listen(port, () => console.log("API lisening in the port: ", port));
