// crequire express
const express=require('express');
//create instance from express
const app=express();
//require Dotenv
require('dotenv').config();
//MIddleweare bodyPorser
app.use(express.json());
//require function connect
const connect=require('./config/ConnectDb');
connect();
//create PORT
const PORT=pro.env.PORT;
//listen to the PORT
app.listen(PORT,(err)=>{
    err?console.log(err)
    :console.log(`server is runnig on PORT : ${PORT}`)
})

