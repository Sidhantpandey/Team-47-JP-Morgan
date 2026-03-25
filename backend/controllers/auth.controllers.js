import db from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const { Admin, Parent, Volunteer, User } = db;

const secret = process.env.JWT_SECRET || 'supersecret';
const ALLOWED_ROLES = new Set(["admin", "parent", "volunteer"]);

const normalizeRole = (role) => {
  if (!role) return null;
  const r = String(role).toLowerCase().trim();
  return ALLOWED_ROLES.has(r) ? r : null;
};

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  const normalizedRole = normalizeRole(role);
  if (!normalizedRole) return res.status(400).json({ error: 'Invalid role' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (user.role !== normalizedRole) {
    return res.status(403).json({ error: 'Role does not match this account' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Incorrect password' });

  let profile;
  if (normalizedRole === 'admin') profile = await Admin.findOne({ where: { userId: user.id } });
  else if (normalizedRole === 'parent') profile = await Parent.findOne({ where: { userId: user.id } });
  else if (normalizedRole === 'volunteer') profile = await Volunteer.findOne({ where: { userId: user.id } });

  if (!profile) return res.status(404).json({ error: 'Role profile not found' });

  // `id` inside JWT is the role-profile id, since the rest of the backend expects that.
  const token = jwt.sign(
    { id: profile.id, userId: user.id, role: normalizedRole },
    secret,
    { expiresIn: '1d' }
  );

  return res.status(200).json({ token, id: profile.id, role: normalizedRole });
};



export const register = async (req, res) => {
  const { role, fullName, email, password} = req.body;

  try {
    const normalizedRole = normalizeRole(role);
    if (!normalizedRole || !fullName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check for existing user
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: `${normalizedRole} already exists with this email` });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      role: normalizedRole,
      fullName,
      email,
      password: hashedPassword,
    });

    // Create the role-specific profile (no password/email duplication).
    let profile;
    if (normalizedRole === 'admin') profile = await Admin.create({ fullName, userId: newUser.id });
    else if (normalizedRole === 'parent') profile = await Parent.create({ fullName, userId: newUser.id });
    else if (normalizedRole === 'volunteer') profile = await Volunteer.create({ fullName, userId: newUser.id });

    const token = jwt.sign(
      { id: profile.id, userId: newUser.id, role: normalizedRole },
      secret,
      { expiresIn: '1d' }
    );

    return res.status(201).json({
      token,
      id: profile.id,
      email: newUser.email,
      role: normalizedRole,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
