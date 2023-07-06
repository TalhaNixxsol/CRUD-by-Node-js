const mongoose=require('mongoose');

const createSchema=new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Enter your name']
    },
    email:{
        type: String,
        required: [true, 'Please Provide Your Email Address']
    }
});

module.exports=mongoose.model('crud',createSchema)