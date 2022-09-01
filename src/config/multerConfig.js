import multer from 'multer';
import { extname, resolve } from 'path';
// Importando multer e path

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    // Metodo para filtrar o tipo que vai receber

    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('O arquivo precisa ser PNG ou JPG.'));
    }
    // Se for diferente retornar erro

    return cb(null, true);
    // Se estiver certo, retornar true para seguir
  },
  storage: multer.diskStorage({
    // Esse parametro serve para salvarmos os arquivos no nosso servidor
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
      // O primeiro parametro é onde chamamos algum erro caso aconteça
      // O segundo é onde vai ser salvo nossos arquivos.
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
      // O primeiro parametro é onde chamamos algum erro caso aconteça
      // O segundo nomeia o arquivo que estamos recebendo
      // nesse caso o arquivo vai ter o nome da data atual com milisegundos e tudo mais
      // e a extensão é pega do nome original utilizando o extname
    },

  }),
};
