import multer from 'multer';
// importando modulo multer

import multerConfig from '../config/multerConfig';
// importando multer config

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');
// criando uma variavel upload

class FotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (e) {
        return res.json({ errors: ['Aluno não existe'] });
      }
    });
  }
}

export default new FotoController();
