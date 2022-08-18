const mongoose=require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({

    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('studentlist',userSchema)