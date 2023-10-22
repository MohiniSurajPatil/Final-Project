const mongoose=require("mongoose")



const userdata= new mongoose.Schema(
    { 
        ContactPerson:{type:String},
        RNumber1:{type:Number},
        RNumber2:{type:Number},
        Email:{type:String},
        state:{type:String},
        Dis:{type:String},
        Tal:{type:String},
        City:{type:String},
        Area:{type:String},
        Pincode:{type:Number},
        Address:{type:String},
        Landmark:{type:String},
        Bus:{type:String},
        UserBus:{type:String},
        web1:{type:String},
        web2:{type:String},
        Image:{type:String}
    }
       
    
)
const UserData= new mongoose.model("Data",userdata);
module.exports=UserData;