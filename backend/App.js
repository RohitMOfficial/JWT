const express=require('express');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

const model=require('./Module/userSchema');

const url='mongodb://localhost/newcrudDB';
mongoose.connect(url,{ useNewUrlParser:true });
const newuser=require('./Router/user');
const signup=require('./Router/signup')


const con=mongoose.connection

con.on('open',()=>{
    console.log("connnected");
})

app.use('/newuser',newuser);
app.use('/signup',signup);


// let users=[
//     {
//         user:"Rohit",
//         password:"rohit123"
//     },
//     {
//         user:"Lalit",
//         password:"lalit123"
//     }
// ];

// let security="RohitKey";




// app.get('/authorization', authorization,(req,res)=>{
    
// })





// function authorization(req,res,next){
//     const authHeader=req.headers['authorization'];
//     let token=authHeader && authHeader.split(' ')[1];
//     if(token==null) return res.sendStatus(401);
//     jwt.verify(token,security,(err,user)=>{
//         if(err) return res.sendStatus(403);
//         req.user=user;
//         next();
//     })
// }



app.listen(5000,()=>{
    console.log("server is running");
})