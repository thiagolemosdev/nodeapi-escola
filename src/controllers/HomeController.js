import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Thiago',
      sobrenome: 'lemos',
      email: 'oi@th.com',
      idade: 25,
      peso: 95.5,
      altura: 1.70,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
