import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // Verificando o token de acordo com SECRET

    const { id, email } = dados;
    // Desestructuring do dados, pegando o email e id do usuario

    const user = await User.findOne({
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
