'use strict';

module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    caffeine_content: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    caffeine_percentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});
  Coffee.associate = function(models) {
    Coffee.hasMany(models.Post, {foreignKey: 'coffee', onDelete: 'cascade'});
  };
  return Coffee;
};
