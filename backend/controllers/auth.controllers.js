import db from "../models/index.js";
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const { Admin, Parent, Volunteer } = db;

const secret = process.env.JWT_SECRET || 'supersecret';

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  let userModel;
  if (role === 'admin') userModel = Admin;
  else if (role === 'parent') userModel = Parent;
  else if (role === 'volunteer') userModel = Volunteer;
  else return res.status(400).json({ error: 'Invalid role' });

  const user = await userModel.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Incorrect password' });

  const token = jwt.sign({ id: user.id, role }, secret, { expiresIn: '1d' });
  return res.status(200).json({ token });
};



export const register = async (req, res) => {
  const { role, fullName, email, password} = req.body;

  try {
    if (!role || !fullName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    let userModel;
    if (role === 'admin') userModel = Admin;
    else if (role === 'parent') userModel = Parent;
    else if (role === 'volunteer') userModel = Volunteer;
    else return res.status(400).json({ error: 'Invalid role' });

    // Check for existing user
    const existing = await userModel.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: `${role} already exists with this email` });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user based on role
    let newUser;
    if (role === 'admin') {
      newUser = await Admin.create({ fullName, email, password: hashedPassword });
    } else if (role === 'parent') {
      newUser = await Parent.create({ fullName, email, password: hashedPassword });
    } else if (role === 'volunteer') {
      newUser = await Volunteer.create({ fullName, email, password: hashedPassword });
    }

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id, role }, secret, { expiresIn: '1d' });

    return res.status(201).json( {
      token,
      id: newUser.id,
      email: newUser.email,
      role
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
