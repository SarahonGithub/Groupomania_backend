'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.articles.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      })
      models.articles.hasMany(models.comment)
    }
  };
  articles.init({
    id_user: DataTypes.BIGINT,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image_url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};