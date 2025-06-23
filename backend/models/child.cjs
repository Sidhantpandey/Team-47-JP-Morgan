const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const Child = sequelize.define('Child', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    level: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 3
    }
  },
    milestones: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  }
}, {
  tableName: 'children',
  timestamps: true
});

module.exports = Child;


