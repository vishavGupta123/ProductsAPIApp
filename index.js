const express=require('express');
const app=express();
const path=require('path');
const port=8000;
const router=express.Router();
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){

        console.log("Error in running the server");
    }
   
})



