"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

// importando Sequelize

// criando a class aluno informando que ela extende do Model e já exportando
 class Foto extends _sequelize.Model {
  static init(sequelize) {
    // chamando o sequelize

    super.init({
      id: {
        type: _sequelize2.default.UUID,
        defaultValue: _sequelize2.default.UUIDV4,
        primaryKey: true,
      },
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo imagem não pode ficar vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo imagem não pode ficar vazio',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`;
        },
      },
      // Chamanda tudo que essa classe precisa ter
    }, {
      sequelize,
      tableName: 'fotos',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // Informando qual o outro modulo e passando qual campo é a chabe estrangeira
  }
  // Metodo para associar esse model ao outro model
} exports.default = Foto;
