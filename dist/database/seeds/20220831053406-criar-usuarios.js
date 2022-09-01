"use strict";const bcryptjs = require('bcryptjs');
const { v4 } = require('uuid');
// Importando bcrypt para criptografaer a senha

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: v4(),
          nome: 'Thiago',
          email: 'Thiago@th.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Lucas',
          email: 'Lucas@th.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Rodrigo',
          email: 'Rodrigo@th.com',
          password_hash: await bcryptjs.hash('1234568', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Mario',
          email: 'Mario@th.com',
          password_hash: await bcryptjs.hash('1234561', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Jorge',
          email: 'Jorge@th.com',
          password_hash: await bcryptjs.hash('1234562', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Guilherme',
          email: 'Guilherme@th.com',
          password_hash: await bcryptjs.hash('1234564', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Roger',
          email: 'Roger@th.com',
          password_hash: await bcryptjs.hash('123455', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Nelson',
          email: 'Nelson@th.com',
          password_hash: await bcryptjs.hash('1234560', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Thales',
          email: 'Thales@th.com',
          password_hash: await bcryptjs.hash('123459', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Amaro',
          email: 'Amaro@th.com',
          password_hash: await bcryptjs.hash('123456876', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Caio',
          email: 'Caio@th.com',
          password_hash: await bcryptjs.hash('12345618', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Ricardo',
          email: 'Ricardo@th.com',
          password_hash: await bcryptjs.hash('12234568', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Eliezer',
          email: 'Eliezer@th.com',
          password_hash: await bcryptjs.hash('12334568', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Steve',
          email: 'Steve@th.com',
          password_hash: await bcryptjs.hash('12134568', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: v4(),
          nome: 'Marcelo',
          email: 'Marcelo@th.com',
          password_hash: await bcryptjs.hash('1234568', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {
  },
};
