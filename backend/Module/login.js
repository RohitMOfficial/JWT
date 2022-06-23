const mongoose=require('mongoose');

const signup=new mongoose.Schema({
    name:{
        type:String,
        
    },
    uname:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('signup',signup);