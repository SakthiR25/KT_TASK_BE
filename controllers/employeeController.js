const Employee = require('../models/Employee');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new employee
exports.addEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await employee.remove();
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the employee' });
  }
};


// Toggle employee active status
exports.toggleActiveStatus = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      employee.active = !req.body.inactive;
      await employee.save();
      res.json({ message: 'Employee status updated' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
