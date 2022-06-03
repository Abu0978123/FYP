const mongoose = require('mongoose');
const express = require('express');
// const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    }, 
    email:{
        type:String,
        required: true,
        unique: true
    },
    course:{
        type:String,
        required: true
    },
    qualification:{
        type:String,
        required: true
    },
  
    message:{
        type:String,
        required: true
    }
       
});

const applyCourse = new mongoose.model("applyCourse" , studentSchema );
module.exports = applyCourse; 