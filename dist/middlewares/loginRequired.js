"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  // Pegando o texto do header Bearer...

  if (!authorization) {
    return res.status(401).json({
      error: ['Login Required'],
    });
  }
  // Verificando se veio algo do header

  const [, token] = authorization.split(' ');
  // separando o token do texto

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    // Verificando o token de acordo com SECRET

    const { id, email } = dados;
    // Desestructuring do dados, pegando o email e id do usuario

    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });
    // Verificando se o email mudou (Pegando dados)

    if (!user) {
      return res.status(401).json({
        error: ['Token expirado ou inválido'],
      });
    }
    // Verificando se o email mudou (Devolvendo erros)

    req.userId = id;
    req.userEmail = email;
    // devolvendo para requisição o email e o id

    return next();
    // contrinuado o midlleware
  } catch (e) {
    return res.status(401).json({
      error: ['Token expirado ou inválido'],
    });
  }
  // Try catch de validação do token
};
