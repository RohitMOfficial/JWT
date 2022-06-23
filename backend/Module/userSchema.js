const mongoose=require('mongoose');


const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('schema',schema);