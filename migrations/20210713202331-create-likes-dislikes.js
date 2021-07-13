'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Likes_dislikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      id_article: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id'
        }
      },
      likes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValues: 0
      },
      dislikes: {
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
    await queryInterface.dropTable('Likes_dislikes');
  }
};