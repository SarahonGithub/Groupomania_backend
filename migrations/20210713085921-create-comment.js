'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_article: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id'
        }
      },
      id_user: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      is_active: {
        allowNull: false,
        type: Sequelize.boolean,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};