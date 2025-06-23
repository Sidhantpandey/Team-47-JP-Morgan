const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const VolunteerParent = sequelize.define('VolunteerParent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  volunteerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'volunteer_parents',
  timestamps: false,
});

module.exports = VolunteerParent;
