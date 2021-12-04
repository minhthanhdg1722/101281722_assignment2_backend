const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mthanhdg:Mt6475139798@cluster0.muxfz.mongodb.net/101281722_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(9090, () => { console.log('Server is running...') });