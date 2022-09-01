"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');
// Importando multer e path

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    // Metodo para filtrar o tipo que vai receber

    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('O arquivo precisa ser PNG ou JPG.'));
    }
    // Se for diferente retornar erro

    return cb(null, true);
    // Se estiver certo, retornar true para seguir
  },
  storage: _multer2.default.diskStorage({
    // Esse parametro serve para salvarmos os arquivos no nosso servidor
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
      // O primeiro parametro é onde chamamos algum erro caso aconteça
      // O segundo é onde vai ser salvo nossos arquivos.
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
      // O primeiro parametro é onde chamamos algum erro caso aconteça
      // O segundo nomeia o arquivo que estamos recebendo
      // nesse caso o arquivo vai ter o nome da data atual com milisegundos e tudo mais
      // e a extensão é pega do nome original utilizando o extname
    },

  }),
};
