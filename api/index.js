const express = require('express');
const app = express()

const data = require('./plus.json')

app.get("/", (req,res)=>{
    res.send("working")
})

app.get("/data",(req,res)=>{
    res.send(data)
    console.log(data[0].img)
})

app.listen(8000,()=>{
    console.log(`Listening on port 8000`)
})