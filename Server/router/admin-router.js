const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../modals/admin-modal');
const router = express.Router();

const defaultAdminCredentials = {
  email: 'admin@devexa.com',
  password: 'Devexa@2025',
};
const hashDefaultPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    if (email === defaultAdminCredentials.email) {
      const hashedDefaultPassword = await hashDefaultPassword(defaultAdminCredentials.password);
      console.log(password,hashedDefaultPassword) 
      const isMatch = await bcrypt.compare(password, hashedDefaultPassword);
       console.log(isMatch)
      if (isMatch) {
        const token = jwt.sign({ adminId: 'defaultAdminId' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({
          token,
          admin: { email: defaultAdminCredentials.email, name: 'Admin' },
        });
      } else {
        return res.status(400).json({ message: 'Invalid password' });
      }
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
      token,
      admin: { email: admin.email, name: admin.name },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;