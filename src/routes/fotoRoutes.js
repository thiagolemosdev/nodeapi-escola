import { Router } from 'express';
import multer from 'multer';
// importando modulo multer

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';
// importando multer config

const upload = multer(multerConfig);
// criando uma variavel upload

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);
// chamando o upload na rota

export default router;
