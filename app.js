const express=require('express');
const app=express();


// app.listen(3000,()=>{
// console.log("working ----------------->");
// })


app.get('/',(req,res)=>{
    // if(req) console.log("__________ERR_________");
    res.status(200).json({ message : 'Hello from server side', app : 'Natours'});
})

app.post('/',(Req,res)=>{
res.send("This is posting");
})

// OR above one
const port=3000
app.listen(port,()=>{
    console.log(`This app running on port ${port}`);
    })