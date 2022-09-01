"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
// importando modulo multer

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
// importando multer config

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');
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
        const foto = await _Foto2.default.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (e) {
        return res.json({ errors: ['Aluno não existe'] });
      }
    });
  }
}

exports. default = new FotoController();
