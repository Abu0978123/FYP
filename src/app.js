const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3500;
const hbs = require('hbs');
require('./db/conn');
const Registration = require('./models/registration');
// const { json } = require('express');


// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
const Static_Path = path.join(__dirname, "../src/public");
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
app.get("/regform" , (req,res) =>{
    res.render("regform") 
});  
app.post("/regform" , async(req,res) =>{
   try{ 
       const password = req.body.password;
       const confirmpassword = req.body.confirmpassword;
       if(password===confirmpassword)
       {
      const regStd = new Registration({
          name: req.body.name,
          email: req.body.email,
          password:password,
          confirmpassword: req.body.confirmpassword,
          gender: req.body.gender
      });
      const registered = await regStd.save();
      res.status(201).render("index");
    }else
    {
        res.send("you are entering not matching password");
    }
   }
   catch(e)   
   {
       res.status(404).send("<h1> you entered wrong data</h1>");
   }
});  
app.get("/loginform" , (req,res) =>{
    res.render("loginform") 
}); 

app.post("/loginform" , async(req,res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const usermail = await Registration.findOne({email : email});
        if(usermail.password === password)
        {
            res.status(202).render("index");
        }else{
            res.send("Email and Password are not matched");
        }
    } catch (error) {
        res.status(400).send(error);
    }
}); 
app.listen(port , ()=>{
    console.log(`the port is running on ${port}`);
})
