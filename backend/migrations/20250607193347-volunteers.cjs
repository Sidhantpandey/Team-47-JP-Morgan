'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('volunteers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
       password: {
        type: Sequelize.STRING,
        allowNull: false
    }
,

      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      skills: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      adminId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      assignedChildId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // You can later add a foreign key constraint if needed
      },

      assignmentReason: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      assignmentStatus: {
        type: Sequelize.ENUM("pending", "active", "completed", "rejected"),
        defaultValue: "pending",
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('volunteers');
  },
};