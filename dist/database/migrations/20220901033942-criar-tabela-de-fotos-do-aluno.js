"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
          // Passando que ele é foreign key da tabela alunos
          // E do campo id

        },
        onDelete: 'SET NULL',
        // Informando que ao deletar um aluno ele vai deletar a foto

        onUpdate: 'CASCADE',
        // Informando que ao atualizar um aluno ele vai atualizar aqui nas fotos tambem

      },
      // Criando aluno_id como foreign key
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
