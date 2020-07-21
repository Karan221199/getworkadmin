const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT= process.env.PORT || 5000
const {MONGOURI} =require('./config/keys')



mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('connected',()=>{
console.log('connected to mongo')
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
    })
  
    require('./models/employer')
    require('./models/post')
    require('./models/user')
    require('./models/applicants')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/applicant'))

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log("server is running on " , PORT)
})