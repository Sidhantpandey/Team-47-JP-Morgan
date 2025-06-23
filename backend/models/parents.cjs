const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const Parent = sequelize.define('Parent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: /^[6-9]\d{9}$/i,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  occupation: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  numberOfChildren: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },

  registrationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'parents',
  timestamps: true,
});

module.exports=Parent