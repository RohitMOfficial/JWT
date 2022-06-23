const express=require('express');
const router=express.Router();
const modle=require('../Module/login')
const jwt=require('jsonwebtoken');
const security=require('../security');


router.get('/isValid', async (req,res)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    if(token==null) return res.sendStatus(401);
    jwt.verify(token,security,(err,user)=>{
        if(err) res.sendStatus(403);
        req.user=user;
    })
    res.json({
        valid:true,
        uname:req.user.uname
    })
})

router.post('/',async(req,res)=>{
    const user=new modle({
        name:req.body.name,
        uname:req.body.uname,
        pass:req.body.pass
    });
    console.log(user);
    try{
        const data=await user.save();
        console.log(data);
        const userinfo={
            uname:user.uname
        }
        const token=jwt.sign(userinfo,security);
        
        res.send({
            token:token,
            signup:true,
            username:user.uname
        })
        return;

    }
    catch(err){
        res.json({error:err})
        return;
    }
})
module.exports=router;