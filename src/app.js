const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3500;
const hbs = require('hbs');
  
require('./db/conn');
const Complaint = require('./models/complaint');
// const { json } = require('express');
const bcrypt = require('bcrypt');
 
  
// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
const Static_Path = path.join(__dirname, "../public");
const views_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.use(express.static(Static_Path));
app.set("view engine", "hbs");
app.set("views", views_Path);
hbs.registerPartials(partials_Path);

app.get("/" , (req,res) =>{
    res.render("index") 
}); 
// app.get("/contact" , (req,res) =>{  
//     res.render("header") 
// });  
app.post("/complaint" , async(req,res) =>{
   try{  
    const AddData = new Complaint(req.body);
    const registered = await AddData.save();
    console(req.body);  

    //   const complaintName = new Complaint({
    //       name: req.body.name, 
    //       email: req.body.email,
    //       subject:subject,
    //       message: req.body.message
    //   });
    //   const registered = await complaintName.save();
    //   res.status(201);
   } 
   catch(e)   
   {
       res.status(404).send("<h1> you entered wrong data</h1>");
   } 
// });  
// app.get("/loginform" , (req,res) =>{
//     res.render("loginform") 
// });  

// app.post("/loginform" , async(req,res) =>{
//     try {
//         const email = req.body.email;
//         const password = req.body.password;
//         const usermail = await Registration.findOne({email : email});
//         // NOW for bcrypt login password
//         const isMatch = await bcrypt.compare(password, usermail.password );
//         if(isMatch)
//         //without bcrypt logining  
//         // if(usermail.password === password)
//         {
//             res.status(202).render("index");
//         }else{
//             res.send("Email and Password are not matched");
//         }
//     } catch (error) {
//         res.status(400).send(error);
//     }
}); 
app.listen(port , ()=>{
    console.log(`the port is running on ${port}`);
});
