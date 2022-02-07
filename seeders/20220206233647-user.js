'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Snow',
      login: 'john',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pink Floyd',
      login: 'pink',
      password: 'qwerty',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tom Cruise',
      login: 'tom',
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};