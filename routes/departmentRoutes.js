const express = require("express");
const Department = require("../models/Department");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const dept = await Department.create(req.body);
  res.status(201).json(dept);
});

// READ ALL
router.get("/", async (req, res) => {
  const depts = await Department.find();
  res.json(depts);
});

// UPDATE
router.put("/:dept_no", async (req, res) => {
  const dept = await Department.findOneAndUpdate(
    { dept_no: req.params.dept_no },
    req.body,
    { new: true }
  );
  res.json(dept);
});

// DELETE
router.delete("/:dept_no", async (req, res) => {
  await Department.findOneAndDelete({ dept_no: req.params.dept_no });
  res.json({ message: "Department deleted" });
});

module.exports = router;
