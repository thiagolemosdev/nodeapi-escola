import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
// importando Sequelize

// criando a class aluno informando que ela extende do Model e já exportando
export default class User extends Model {
  static init(sequelize) {
    // chamando o sequelize

    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 5 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
      // Chamanda tudo que essa classe precisa ter
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    // criando o hash de senha

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
  // Comparando senha do login com senha do banco
}
