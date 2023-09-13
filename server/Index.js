const express=require('express');
const dbConnect=require('./DbConnect')

const app=express();
const port=4000;

dbConnect();

app.listen(port,()=>{
    console.log(`listeining to ${port}`);
})