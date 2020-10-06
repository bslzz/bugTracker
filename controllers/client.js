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

  // REPORT BUG
  reportBug: async (req, res) => {
    try {
      const { client_id, client_username, project, bug } = req.body;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'client') {
        const new_bug = await new Bug({
          client_id,
          client_username,
          project,
          bug,
        });

        const result = await new_bug.save();

        return res.status(200).json({
          success: true,
          data: new_bug,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: 'unauthorized only client can create bugs',
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  },

  // CONFIRM SOLUTION

  confirmsolution: async (req, res) => {
    try {
      const { bug_id } = req.body;
      const bug = await Bug.find({ bug_id: bug_id });
      name = bug[0].working_emp_name;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'client') {
        if (bug.length > 0) {
          const filter = { bug_id: bug_id };
          const update = {
            working_emp_id: 0,
            working_emp_name: `solved by ${name}`,
            bug_status: 'solved',
          };

          const doc = await Bug.findOneAndUpdate(filter, update, { new: true });

          return res.status(200).json({
            success: true,
            data: doc,
          });
        } else {
          return res.status(404).json({
            success: false,
            message: 'bug not found',
          });
        }
      } else {
        return res.status(401).json({
          success: false,
          message: 'unauthorized',
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  },

  //DENY SOLUTION
  denysoluton: async (req, res) => {
    try {
      const { bug_id } = req.body;
      const bug = await Bug.find({ bug_id: bug_id });

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'client') {
        if (bug.length > 0) {
          const filter = { bug_id: bug_id };
          const update = {
            bug_status: 'solution not working',
          };

          const doc = await Bug.findOneAndUpdate(filter, update, { new: true });

          return res.status(200).json({
            success: true,
            data: doc,
          });
        } else {
          return res.status(404).json({
            success: false,
            message: 'bug not found',
          });
        }
      } else {
        return res.status(401).json({
          success: false,
          message: 'unauthorized',
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  },

  //DELETE BUG
  deleteBug: async (req, res) => {
    try {
      const { bug_id } = req.body;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      const bug = await Bug.find({ bug_id: bug_id });

      if (data.type === 'client') {
        if (bug.length > 0) {
          if (data.id === bug[0].client_id) {
            await Bug.remove({ bug_id: bug_id });

            return res.status(200).json({
              success: true,
              message: 'bug has been deleted successfully',
            });
          } else {
            return res.status(401).json({
              success: false,
              message: 'you do not have authority to delete this bug',
            });
          }
        } else {
          return res.status(404).json({
            success: false,
            message: 'no bug found',
          });
        }
      } else {
        return res.status(401).json({
          success: false,
          message: 'unauthorized',
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },
  // GET BUG STATUS
  getBugStatus: async (req, res) => {
    try {
      const { id } = req.params;

      const bug = await Bug.find({ client_id: id });

      return res.status(200).json({
        success: true,
        data: bug,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },
};
