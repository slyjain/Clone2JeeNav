const { createPool,createConnection } = require("mysql");
require("dotenv").config();
const express=require("express");
const app=express();

const connection = createConnection({
    host: "127.0.0.1",
    port:"3306",
    user: "root",
    password: "12345",
    database: "jeenavigator",
    
});

connection.connect((err)=>{
    if(err){
        console.log("Error")
        console.log(err)
    }
    else{
        console.log("Connected");
    }
});
app.get("/",(req,res)=>{
    connection.query("Select * from user",(err,rows,feilds)=>{
        if(!!error){
            console.log("ERROR");

        }
        else{
            console.log("SuccessFul query");
        }
    })
})
app.listen(3000);