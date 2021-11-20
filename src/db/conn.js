const express = require("express");
const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect('mongodb://localhost:27017/StudentsProfile' , 
{useNewUrlParser: true, 
useUnifiedTopology: true
}).then(()=> 
console.log("connected successfully"))
.catch (() =>
 console.log("Connection Failed"));
