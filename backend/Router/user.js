const express=require('express');
const router=express.Router();
const model=require('../Module/userSchema')
router.get('/', async (req,res)=>{
    
    try{
        const data=await model.find();
        if(data){
           return res.json(data);
        }

    }
    catch(err){
       return res.send("no any stu");
    }
   
    
})


router.get('/alluser',async (req,res)=>{
    const data=await model.find();
    if(data){
        res.json(data);
        return
    }
    res.json({
        err:"no user"
    })
    
})

router.post('/adduser',async (req,res)=>{
    let user=new model({
        name:req.body.name,
        age:req.body.age,
        state:req.body.state
    })
    try{
        const u1=await user.save();
        res.send(u1);
        return;
    }
    catch(err){
        res.send("User is not inserted in db",err);
        return;
    }

    console.log(user);
    res.send('get the user');
})
module.exports=router;