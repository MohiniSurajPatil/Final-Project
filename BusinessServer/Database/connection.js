const mongoose=require("mongoose");
//const db = "mongodb://127.0.0.1:27017/RegisterBusiness";
const dotenv=require("dotenv")

dotenv.config({path:"./config.env"})

const db=process.env.database;
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("connected"))
.catch((e)=> console.log(e))