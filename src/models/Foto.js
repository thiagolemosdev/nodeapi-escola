import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

// importando Sequelize

// criando a class aluno informando que ela extende do Model e já exportando
export default class Foto extends Model {
  static init(sequelize) {
    // chamando o sequelize

    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo imagem não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo imagem não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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
}
