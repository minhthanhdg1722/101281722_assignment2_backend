const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
app.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({});

    try {
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Create New Record
app.post('/api/v1/employees', async (req, res) => {
    const employee = new employeeModel(req.body);
    try {
        await employee.save();
        res.status(201).send("Employee Created");
    } catch (err) {
        res.status(500).send(err);
    }
});

// Fetch 1 employee
app.get('/api/v1/employees/:id', async (req, res) => {
    const employee = await employeeModel.find({id: req.params.id}).exec();

    try {
        res.status(200).send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});


//Update Record
app.put('/api/v1/employees/:id', async (req, res) => {
    try {

        const employee = await employeeModel.findOneAndUpdate({id: req.params.id}, req.body)
        await employee.save()
        res.status(200).send("Employee Updated")
    } catch (err) {
        res.status(500).send(err)
    }
})

//Delete Record
app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findOneAndDelete({id: req.params.id})

        if (!employee) res.status(404).send("No item found")
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app