'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true, unique: true },
    type: DataTypes.STRING,
    productId: DataTypes.STRING,
    sellerId: DataTypes.UUID,
    buyerId: DataTypes.UUID,
    price: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedTimes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      defaultValue: 0
    }
  });
  return Model;
};
