'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Article.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
      models.Article.hasMany(models.Comment)
    }
  };
  Article.init({
    id_users: DataTypes.INTEGER,
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image_url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};