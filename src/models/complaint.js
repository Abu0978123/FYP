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
    subject:{
        type:String,
        required: true
    },
  
    message:{
        type:String,
        required: true
    }
       
});
// studentSchema.pre("save", async function(next){
//     if(this.isModified("password")){
//         console.log(`the current password id ${this.password}`);
//         this.password = await bcrypt.hash(this.password, 10);
//         console.log(`the current password id ${this.password}`);
//         this.confirmpassword = undefined;
//     }
//     next();
// });
const Complaint = new mongoose.model("Complaint" , studentSchema );
module.exports = Complaint; 