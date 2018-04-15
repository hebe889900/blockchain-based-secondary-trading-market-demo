'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true, unique: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarUrl: DataTypes.STRING
  });
  return Model;
};
