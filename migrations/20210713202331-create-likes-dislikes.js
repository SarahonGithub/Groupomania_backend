'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('likes', {
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
          model: 'articles',
          key: 'id'
        }
      },
      id_user: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      likes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValues: 0
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
    await queryInterface.dropTable('likes');
  }
};