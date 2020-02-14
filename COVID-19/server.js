const express=require('express')
const app=express()
const request=require('request')
const path=require('path')



app.get('/getData',(req,res)=>{
request('https://server.toolbon.com/home/tools/getPneumonia?token=c8e29fbe01f742658a21cf7d81835d7f',(err,response,body)=>{
    if(!err){
        res.send(body)
    }
})
})
app.use('/assets',express.static(path.join(__dirname,'./assets')))
app.use('/public',express.static(path.join(__dirname,'./public')))
app.listen('8080',(err)=>{
    console.log("server start")
})
// app.use(cors())
