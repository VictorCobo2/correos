import express from "express";
import { enviarCorreo, enviarCorreoAzul, enviarCorreoAmarillo } from "../controllers/correo.controller";

export const correo_route = express.Router();

correo_route.post("/correo", enviarCorreo);
correo_route.post("/correo1", enviarCorreoAzul);
correo_route.post("/correo2", enviarCorreoAmarillo);
