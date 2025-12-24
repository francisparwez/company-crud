const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    dept_no: {
        type: String,
        required: true,
        unique: true
    },
    dept_name: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model("Department", departmentSchema);