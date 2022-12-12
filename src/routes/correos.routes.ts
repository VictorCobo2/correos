import express from 'express'
import { enviarCorreo } from '../controllers/correo.controller';

export const correo_route = express.Router();

correo_route.post("/correo", enviarCorreo);
