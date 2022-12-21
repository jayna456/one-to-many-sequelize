"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.tutorial, {
        foreignKey: "tutorialId",
        as: "tutorial",
      });
    }
  }
  comment.init(
    {
      name: DataTypes.STRING,
      text: DataTypes.STRING,
      tutorialId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tutorial",
        },
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
