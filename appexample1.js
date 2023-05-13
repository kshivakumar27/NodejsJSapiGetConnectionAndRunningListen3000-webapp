const express=require('express');
const app=express();


// app.listen(3000,()=>{
// console.log("working ----------------->");
// })


app.get('/',(req,res)=>{
    // if(req) console.log("__________ERR_________");
    res.status(200).send("Hello from server side");
})

// OR above one
const port=3000
app.listen(port,()=>{
    console.log(`This app running on port ${port}`);
    })