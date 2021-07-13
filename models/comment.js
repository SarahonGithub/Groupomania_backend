'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comment.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
      models.Comment.belongsTo(models.Article, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Comment.init({
    id_article: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};