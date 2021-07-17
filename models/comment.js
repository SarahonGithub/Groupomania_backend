'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comments.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      })
      models.comments.belongsTo(models.article, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  comments.init({
    id_article: DataTypes.INTEGER,
    id_user: DataTypes.BIGINT,
    comment: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};