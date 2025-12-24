const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  emp_no: {
    type: Number,
    required: true,
    unique: true
  },
  birth_date: Date,
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    required: true
  },
  hire_date: {
    type: Date,
    required: true
  },

  departments: [
    {
      dept_no: String,
      from_date: Date,
      to_date: Date
    }
  ],

  manager_of: [
    {
      dept_no: String,
      from_date: Date,
      to_date: Date
    }
  ],

  salaries: [
    {
      salary: Number,
      from_date: Date,
      to_date: Date
    }
  ],

  titles: [
    {
      title: String,
      from_date: Date,
      to_date: Date
    }
  ]
});

module.exports = mongoose.model("Employee", employeeSchema);
