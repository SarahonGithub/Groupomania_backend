'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.likes.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      })

      models.likes.belongsTo(models.article, {
        foreignKey: {
          allowNull: false
        }
      })

    }
  };
  likes.init({
    id_user: DataTypes.BIGINT,
    id_article: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'likes',
  });
  return likes;
};