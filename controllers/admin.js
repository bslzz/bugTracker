const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const Bug = require('../models/Bug');
const jwt = require('jsonwebtoken');

module.exports = {
  //get all admins
  getAdmin: async (req, res) => {
    try {
      const admins = await Admin.find({});

      return res.status(200).json({
        success: true,
        data: admins,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  //register admin
  adminRegister: async (req, res) => {
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
      const existingUser = await Admin.findOne({ username });
      if (existingUser)
        return res.status(422).json({ msg: 'User already exists' });

      //hash password
      const hash = await bcrypt.hash(password, 10);
      const new_user = await new Admin({
        username,
        password: hash,
      });

      const result = await new_user.save();

      return res.status(201).json({
        success: true,
        type: 'admin',
        data: result,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  //GET ALL BUGS
  getAllBugs: async (req, res) => {
    try {
      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'admin') {
        const bugs = await Bug.find({});

        return res.status(200).json({
          success: true,
          data: bugs,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: 'unauthorized',
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  //ASSIGN BUG

  assignBug: async (req, res) => {
    try {
      const { bug_id, working_emp_id, working_emp_name } = req.body;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'admin') {
        const bug = await Bug.find({ bug_id: bug_id });

        if (bug.length > 0) {
          if (bug[0].bug_status === 'unassigned') {
            const filter = { bug_id: bug_id };
            const update = {
              working_emp_id: working_emp_id,
              working_emp_name: working_emp_name,
              bug_status: 'assigned',
            };

            const doc = await Bug.findOneAndUpdate(filter, update, {
              new: true,
            });

            return res.status(200).json({
              success: true,
              data: doc,
            });
          } else {
            return res.status(401).json({
              success: false,
              message: 'already assigned the bug to one employee',
            });
          }
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
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  //UNASSIGN BUG

  unassignBug: async (req, res) => {
    try {
      const { bug_id } = req.body;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'admin') {
        const bug = await Bug.find({ bug_id: bug_id });

        if (bug.length > 0) {
          if (
            bug[0].bug_status === 'assigned' ||
            bug[0].bug_status === 'solution not working'
          ) {
            const filter = { bug_id: bug_id };
            const update = {
              working_emp_id: 0,
              working_emp_name: 'not assigned',
              bug_status: 'unassigned',
            };

            const doc = await Bug.findOneAndUpdate(filter, update, {
              new: true,
            });

            return res.status(200).json({
              success: true,
              data: doc,
            });
          } else {
            return res.status(401).json({
              success: false,
              message: 'this bug is already unassigned',
            });
          }
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
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  // DELETE BUG

  deleteBug: async (req, res) => {
    try {
      const { bug_id } = req.body;

      const token = req.header('Authorization');
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      data = decoded;

      if (data.type === 'admin') {
        const bug = await Bug.find({ bug_id: bug_id });

        if (bug.length > 0) {
          await Bug.remove({ bug_id: bug_id });

          return res.status(200).json({
            success: true,
            message: 'bug has been deleted successfully',
          });
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
};
