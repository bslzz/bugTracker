const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  //get Clients
  getClients: async (req, res) => {
    try {
      const clients = await Client.find({});

      return res.status(200).json({
        success: true,
        data: clients,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  },

  // register client

  clientRegister: async (req, res) => {
    try {
      const { username, password } = req.body;
      //validation
      if (!username || !password)
        return res.status(422).json({ msg: 'Username and Password required' });
      if (password.length < 5)
        return res
          .status(422)
          .json({ msg: 'Password must be at least 5 characters long' });

      //finding if the user is stored in the DB
      const existingUser = await Client.findOne({ username });
      if (existingUser)
        return res.status(422).json({ msg: 'User already exists' });

      //hash password
      const hash = await bcrypt.hash(password, 10);

      const new_user = await new Client({
        username,
        password: hash,
      });

      const result = await new_user.save();

      return res.status(201).json({
        success: true,
        type: 'client',
        data: result,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },
};
