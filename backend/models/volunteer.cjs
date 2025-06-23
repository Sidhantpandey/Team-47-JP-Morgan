const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.cjs');

const Volunteer = sequelize.define('Volunteer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
,
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { is: /^[6-9]\d{9}$/ },
  },

  skills: {
    type: DataTypes.TEXT,
    allowNull: true,
    // Store comma-separated string or convert to array if using Postgres
  },

  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    // Only when true should child be assigned
  },

  adminId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // ID of the admin who approved this volunteer
  },

  assignedChildId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // Will be set only after approval
  },

  assignmentReason: {
    type: DataTypes.STRING,
    allowNull: true,
    // For admin note: “Matched based on speech delay support”
  },

  assignmentStatus: {
    type: DataTypes.ENUM("pending", "active", "completed", "rejected"),
    defaultValue: "pending",
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
}, {
  tableName: "volunteers",
  timestamps: true,
  paranoid: true,
});

module.exports=Volunteer