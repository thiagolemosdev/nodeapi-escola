"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
// importando Sequelize

// criando a class aluno informando que ela extende do Model e já exportando
 class User extends _sequelize.Model {
  static init(sequelize) {
    // chamando o sequelize

    super.init({
      id: {
        type: _sequelize2.default.UUID,
        defaultValue: _sequelize2.default.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 5 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    // criando o hash de senha

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
  // Comparando senha do login com senha do banco
} exports.default = User;
