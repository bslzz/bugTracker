const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

adminSchema.plugin(AutoIncrement, { inc_field: 'admin_id' });
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;

console.log(Admin);
