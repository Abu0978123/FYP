const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
// const validator = require("validator");
const DB = process.env.DATABASE;
mongoose.connect(DB ,   
{useNewUrlParser: true,  
useUnifiedTopology: true
}).then(()=> 
console.log("connected successfully"))
.catch ((err) =>
 console.log(err));
