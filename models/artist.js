'use strict';
const {encryptPass} = require('../helpers/passHash')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsToMany(models.Fan, {through: models.Follow})
      Artist.hasMany(models.Post)
    }
  };
  Artist.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = encryptPass(instance.password)
      }
    }
  });
  return Artist;
};