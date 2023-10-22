const mongoose=require("mongoose")

const logindetails= new mongoose.Schema(
    { 
        name:{type:String},
        emailId:{type:String },
        userpass:{type:String},
    }
       
    
)
const LoginDetails= new mongoose.model("loginusers",logindetails);
module.exports=LoginDetails;