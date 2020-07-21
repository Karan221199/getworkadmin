const mongoose =require('mongoose')
const {ObjectId}= mongoose.Schema.Types
const applicantSchema=new mongoose.Schema({
    title:{
        type : String,
        required:true
    },
    body:{
        type : String,
        required:true
    },
    
    jobdescription:{
        type:String,
        required:true
    },
    employerid:{
        type:String,
        required:true
    },
    appliedBy:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})
mongoose.model("Applicant",applicantSchema)