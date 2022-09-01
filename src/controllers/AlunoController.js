import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['id', 'url', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'É necessario o id do cliente' });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({ error: 'Aluno não encontrado' });
      }
      const updateAluno = await aluno.update(req.body);
      return res.json(updateAluno);
    } catch (e) {
      console.log('catch');
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'É necessario o id do cliente' });
      }

      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['id', 'url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({ error: 'Aluno não encontrado' });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'É necessario o id do cliente' });
      }

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ error: 'Aaluno não encontrado' });
      }

      await aluno.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
