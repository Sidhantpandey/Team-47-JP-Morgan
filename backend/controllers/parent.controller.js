// // controllers/ParentController.js
// // import Parent from '../models/Parent.js';
// import db from '../models/index.js';

// const { Parent } = db;

// export const getLoggedInParent = async (req, res) => {
//   const { id } = req.user;

//   try {
//     const parent = await Parent.findByPk(id, {
//       attributes: { exclude: ['password'] }, // don't return password
//     });

//     if (!parent) {
//       return res.status(404).json({ error: 'Parent not found' });
//     }

//     res.status(200).json({ parent });
//   } catch (error) {
//     console.error('Error fetching parent:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };