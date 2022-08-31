import Sequelize, { Model } from 'sequelize';

// importando Sequelize

// criando a class aluno informando que ela extende do Model e já exportando
export default class Aluno extends Model {
  static init(sequelize) {
    // chamando o sequelize

    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      altura: Sequelize.FLOAT,
      peso: Sequelize.FLOAT,
      // Chamanda tudo que essa classe precisa ter
    }, {
      sequelize,
    });

    return this;
  }
}
