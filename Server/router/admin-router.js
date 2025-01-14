const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../modals/admin-modal');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials or not an admin' });
    }
     const enteredPassword = password; 
     const storedPasswordHash = user.password;  
     const isMatch = await bcrypt.compare(enteredPassword, storedPasswordHash);
     console.log("Entered Password:", enteredPassword);
     console.log("Stored Password Hash:", storedPasswordHash);
     console.log("Password Match:", isMatch);
 
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
