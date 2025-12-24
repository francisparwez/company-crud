const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// CREATE EMPLOYEE
router.post("/", async (req, res) => {
  const emp = await Employee.create(req.body);
  res.status(201).json(emp);
});

// GET all employees
router.get("/", async (req, res) => {
  try {
    const emps = await Employee.find();    
    res.json(emps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one employee
router.get("/:emp_no", async (req, res) => {
  try {
    const emp = await Employee.findOne({ emp_no: req.params.emp_no });
    if (!emp) return res.status(404).json({ message: "Employee not found" });
    res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE BASIC INFO
router.put("/:emp_no", async (req, res) => {
  const emp = await Employee.findOneAndUpdate(
    { emp_no: req.params.emp_no },
    req.body,
    { new: true }
  );
  res.json(emp);
});

// ADD SALARY
router.post("/:emp_no/salary", async (req, res) => {
  const emp = await Employee.findOneAndUpdate(
    { emp_no: req.params.emp_no },
    { $push: { salaries: req.body } },
    { new: true }
  );
  res.json(emp);
});

// ADD TITLE
router.post("/:emp_no/title", async (req, res) => {
  const emp = await Employee.findOneAndUpdate(
    { emp_no: req.params.emp_no },
    { $push: { titles: req.body } },
    { new: true }
  );
  res.json(emp);
});

// ADD DEPARTMENT
router.post("/:emp_no/department", async (req, res) => {
  const emp = await Employee.findOneAndUpdate(
    { emp_no: req.params.emp_no },
    { $push: { departments: req.body } },
    { new: true }
  );
  res.json(emp);
});

// DELETE EMPLOYEE
router.delete("/:emp_no", async (req, res) => {
  await Employee.findOneAndDelete({ emp_no: req.params.emp_no });
  res.json({ message: "Employee deleted" });
});

module.exports = router;
