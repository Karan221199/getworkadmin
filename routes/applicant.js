const express= require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Applicant= mongoose.model("Applicant")
const requireLoginEmployer=require('../middleware/requireLoginEmployer')


router.get('/myjobs',requireLoginEmployer,(req,res)=>{
    Applicant.find({employerid:req.employer._id})
    .populate("appliedBy","_id name email")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=router