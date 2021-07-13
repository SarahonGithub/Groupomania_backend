'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes_dislikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Likes_dislikes.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })

      models.Likes_dislikes.belongsTo(models.Article, {
        foreignKey: {
          allowNull: false
        }
      })

    }
  };
  Likes_dislikes.init({
    id_user: DataTypes.BIGINT,
    id_article: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Likes_dislikes',
  });
  return Likes_dislikes;
};