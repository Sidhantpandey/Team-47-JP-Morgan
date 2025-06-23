    const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database.cjs');

    const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fullName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    tableName: 'admins',
    timestamps: true
    });

    module.exports = Admin;
