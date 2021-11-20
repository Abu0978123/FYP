const mongoose = require('mongoose');
const express = require('express');

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
    password:{
        type:String,
        required: true
    },
    confirmpassword:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    }

});
const Registration = new mongoose.model("Registration" , studentSchema );
module.exports = Registration;