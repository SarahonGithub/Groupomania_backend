'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id_comment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idarticle: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id'
        }
      },
      iduser: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      is_active: {
        allowNull: false,
        type: Sequelize.boolean,
        defaultValue: 0
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};