// a schema is basically a blueprint

const mongoose=require('mongoose')
const {ObjectId}= mongoose.Schema.Types 
const employerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  
})

mongoose.model("Employer",employerSchema)