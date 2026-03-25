    const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database.cjs');

    const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    }, {
    tableName: 'admins',
    timestamps: true
    });

    module.exports = Admin;
