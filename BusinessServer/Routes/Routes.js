const express=require("express")
//const multer=require('multer')
const routes=express.Router();
const UserData = require("../Model/UserData");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LoginDetails= require("../Model/LoginDetails");

var ObjectId = require('mongodb').ObjectId;

require("../Database/connection");

//const path=require('path')

routes.get("/",(req,res)=>{
    res.send("Home Page");
})






/*const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
     cb(null, 'Public/Images')
    },
    filename: (req, file, cb)=>{
     cb(null, `${file.fieldname} _ ${Date.now()} ${path.extname(file.originalname)}`)
    }
 })
const upload=multer({
    storage: storage
})*/



/*routes.post('/RegisterBusiness',upload.single('file') ,async(req,res)=>{
try{
const { ContactPerson, RNumber1,RNumber2,Email,Dis,Tal,City,Area,Pincode,Address,Landmark,Bus,UserBus,web1,web2}= req.body;
const {Image}=req.file.filename;

let Data= await UserData.create({ContactPerson, RNumber1,RNumber2,Email,Dis,Tal,City,Area,Pincode,Address,Landmark,Bus,UserBus,web1,web2,Image })


//Data.save();
console.log(Data);
//res.send(Data)
}

catch (e){
    console.log(e)
    res.send("An error occurred");
}

})*/

routes.post('/RegisterBusiness',async(req,res)=>{
    try{
    const {Id, ContactPerson, RNumber1,RNumber2,Email,state,Dis,Tal,City,Area,Pincode,Address,Landmark,Bus,UserBus,web1,web2, Image}= req.body;
 
    
  
    let data= new UserData({ContactPerson, RNumber1,RNumber2,Email,state,Dis,Tal,City,Area,Pincode,Address,Landmark,Bus,UserBus,web1,web2, Image})
    await data.save();
    res.send("new Business Added");
}
    catch(e){
        console.log(e);
    }
    
    })





routes.get('/getRegisterDetails', async (req, res) => {
    try {
        let Data = await UserData.find();
        res.send(Data);
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});

routes.get('/getRegisterDetailsforprofile', async (req, res) => {
    try {
      const {RNumber1,RNumber2}=req.body
        let Data = await UserData.find({$or : [{RNumber1:RNumber1},{RNumber2 : RNumber2}]});
        res.send(Data);
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});




routes.patch('/updateRegisterDetails', async(req,res)=>{
    try{

      //const objectId = new objectId(req.params.id); // Convert the ID string to ObjectId

           let {Email}= req.body;
        // const {UserBus, Image}= req.body;

        
           await UserData.findOneAndUpdate({ Email:Email},req.body,{ new:true })

         /* if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
          }
      
          return res.json(updatedDocument);
        } 
        */
res.send("Update")
      }
        catch (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred while updating the document' });
        }
            
      /*  await UserData.findByidAndUpdate({'_id':id}, req.body,{new:true} )
         
        res.send("Updated.....")
        }*/

    /*{
            (e)=>{console.log(e);}

         }   */
});




routes.delete('/deleteBusiness/:Email', async (req, res) => {
    try {
    
      //const id = (req.params.id).trim();
      //var myId = JSON.parse(req.params.id);


        const { Email } = req.params;
        
        await UserData.findOneAndDelete({Email:Email});
      
        res.send("Business deleted");
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});

// Register a new user
routes.post('/signup', async (req, res) => {
    try {
      const { name, emailId, userpass } = req.body;
  
      // Check if the email is already registered
      const existingUser = await LoginDetails.findOne({ emailId });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already in use' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(userpass, 12);
  
      // Create a new user
      const newUser = new LoginDetails({ name, emailId, userpass: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Login a user
  routes.post('/login', async (req, res) => {
    try {
      const {emailId, userpass } = req.body;
  
      // Check if the user exists
      const user = await LoginDetails.findOne({ emailId });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Check the password
      const isPasswordValid = await bcrypt.compare(userpass, user.userpass);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });







module.exports=routes;