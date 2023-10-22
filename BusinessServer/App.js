const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const router=require("./Routes/Routes")
//const path=require('path')
//const multer=require('multer')
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())
app.use(router)
app.use(
    express.urlencoded({ extended: true })
);




dotenv.config({path:"./config.env"})
const Port=process.env.port;


app.listen(Port,()=>{
    console.log("connection done with server 8000")
})
