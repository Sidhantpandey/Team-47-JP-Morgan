import { Sequelize } from 'sequelize';
import sequelize from '../config/database.cjs';
import Admin from './admin.cjs';
import Parent from './parents.cjs';
import Child from './child.cjs';
import Volunteer from './volunteer.cjs';
import VolunteerParent from "./volunteerParent.cjs"
import User from "./user.cjs";

// 1. Parent 1 --- n Child
Parent.hasMany(Child, {
  foreignKey: 'parentId',
  onDelete: 'CASCADE',
});
Child.belongsTo(Parent, {
  foreignKey: 'parentId',
  as: 'parent',
});

// 2. Admin 1 --- n Volunteer
Admin.hasMany(Volunteer, {
  foreignKey: 'adminId',
  onDelete: 'SET NULL',
});
Volunteer.belongsTo(Admin, {
  foreignKey: 'adminId',
  as: 'approvedBy',
});


Volunteer.belongsToMany(Parent, {
  through: VolunteerParent,
  foreignKey: 'volunteerId',
  otherKey: 'parentId',
  as: 'parents',
});


// Export
const db = {
  sequelize,
  Sequelize,
  User,
  Admin,
  Parent,
  Child,
  Volunteer,
  VolunteerParent
};

export default db;
