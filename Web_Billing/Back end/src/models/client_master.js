"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client_Master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client_Master.init(
    {
      cname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cphone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cemail: {
        type: DataTypes.STRING,
      },
      caddress1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caddress2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caddress3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpincode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Client_Master",
    }
  );
  return Client_Master;
};
