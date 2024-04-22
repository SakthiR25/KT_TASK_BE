// const mongoose = require('mongoose');

// const employeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   active: Boolean,
//   inactive:Boolean
// });

// const Employee = mongoose.model('Employee', employeeSchema);

// module.exports = Employee;



// models/Employee.js

// const mongoose = require('mongoose');

// const employeeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   active: {
//     type: Boolean,
//     default: true
//   }
// });

// module.exports = mongoose.model('Employee', employeeSchema);






const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  active: { type: Boolean, default: true }
}); 

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

