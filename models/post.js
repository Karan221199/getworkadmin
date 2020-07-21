const mongoose=require('mongoose')
const {ObjectId}= mongoose.Schema.Types
const postSchema=new mongoose.Schema({
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
    
    postedBy:{
        type:ObjectId,
        ref:"Employer"
    }
},{timestamps:true})
mongoose.model("Post",postSchema)