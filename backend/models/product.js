'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true, unique: true },
    userId: DataTypes.STRING,
    status: DataTypes.STRING,
    images: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  });
  return Model;
};
