import '../Css/Registration.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { UserOutlined ,UnlockOutlined} from '@ant-design/icons';
import { Input } from 'antd'
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register=()=>{

  const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();


let [name, setName]=useState("");
let [num1, setNum1]=useState();
let [num2, setNum2]=useState();
let [email, setEmail]=useState("");
let [state ,setState]=useState("");
let [dist, setDist]=useState("");
let [tal, setTal]=useState("");
let [city, setCity]=useState("");
let [area, setArea]=useState("");
let [pin, setPin]=useState("");
let [address, setAddress]=useState("");
let [landmark, setLandmark]=useState("");
let [Bus, setBus]=useState("");
let [busname, setbusName]=useState("");
let [link1, setLink1]=useState("");
let [link2, setLink2]=useState("");
let [imgurl, setImgUrl]=useState();


let [Userpass, setUserPass]=useState('');
let [userDetail,setUserDatail]=useState([])

 useEffect(()=>{setModal2Open(true)}, [])

/*const convertToBase64=(e)=>{
  console.log(e);
  var render= new FileReader();
  render.readAsDataURL(e.target.files[0]);
  render.onload=()=>{
    console.log(render.result);
  setImage(render.result);
  };
  render.onerror= error =>{
    console.log("Error:" ,error);
  }

}*/

const handleCancel=()=>{
  navigate('/');
}

const handleSubmitmodal=()=>{
  
  try {
    // Make an API request to register the user
     axios.post('http://localhost:8000/login', {"emailId":email, "userpass":Userpass});
    // Redirect or show a success message
  if(email.length==0 || Userpass.length== 0)
{
  alert("Please Enter Valid Details");
}
else 
{  alert("LogIn successful");
setModal2Open(false);
}
   
  } 
  catch (error) {
    // Handle errors
    console.log(error);
  }
}


/*let [bRegisterInfo, setBRegisterInfo]=useState([
  { 
    ContactPerson:"Sukhada Shukla" , 
    RNumber1: "9922007413",
    RNumber2:"9823322966" ,
    Email: " swapnilshukla62@gmail.com",
    Dis: "Pune", 
    Tal:" Warje",
    City:"Pune ", 
    Area:"Pune " ,
    Pincode:"411058",
    Address: "104, Nitish Harmony Apartment, Varanasi Society, Behind Atul Nagar, Warje, Pune, Vinayak Hospital", 
    Landmark: "Atul Nagar ",
    Bus:"HomeMade Cake  " , 
    UserBus: " Red Velvet Cake, Angel Food Cake,White Cake.",
    web1:"  https://www.facebook.com/SWARADAs-163006137698826/" ,
    web2: "facebook.com ",
    img: "./Bimages/bcake.jpg "  
   },
   { 
    ContactPerson:"Mohini Patil" , 
    RNumber1: "9623291359",
    RNumber2:"9823819239" ,
    Email: " naikmohini09@gmail.com",
    Dis: "Raigad", 
    Tal:" Alibag",
    City:"Alibag ", 
    Area:"Chendhare " ,
    Pincode:"402201",
    Address: "Shivkrupa, behind ST Mary Convent School, Anand nagar ", 
    Landmark: "AanandNagar ",
    Bus:"TraditionalFood  " , 
    UserBus: " Modak, Puran poli",
    web1:"  https://www.facebook.com/Mohini-163006137698827/" ,
    web2: " https://www.facebook.com/Mohini-163006137697826/",
    img: "./Bimages/modak.jpg "  
   },
   { 
    ContactPerson:"Sukhada Shukla" , 
    RNumber1: "9509277696",
    RNumber2:"9509277696" ,
    Email: " nishujakhar1996@gmail.com",
    Dis: "Jhunjhunu", 
    Tal:" Jhunjhunu",
    City:"Jhunjhunu ", 
    Area:"Jhunjhunu " ,
    Pincode:"333001",
    Address: " vpo Samaspur Jhunjhunu, Rajasthan", 
    Landmark: "  ",
    Bus:"Ice Cream Making " , 
    UserBus: " Red Velvet Cake, Angel Food Cake,White Cake.",
    web1:"  https://www.facebook.com/Nishu-163006137698826/" ,
    web2: " https://www.facebook.com/Nishu-163006137698826/",
    img: "./Bimages/icecream.jpeg "  
   },
   

]);*/


const handleSubmit=()=>{

  /*const formdata= new FormData();
  formdata.append('file', file)*/


 axios.post("http://localhost:8000/RegisterBusiness",{
  "ContactPerson":name,
  "RNumber1":num1,
  "RNumber2":num2,
  "Email":email,
  "state":state,
  "Dis":dist,
  "Tal":tal,
  "City":city,
  "Area":area,
  "Pincode":pin,
  "Address":address,
  "Landmark":landmark,
  "Bus":Bus,
  "UserBus":busname,
  "web1":link1,
  "web2":link2,
  "Image":imgurl
    
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

alert("Submited")
}










    return(
    <>
     <div>
<div class="register-form">
            <div class="register-item">
       <h1> Registration Form</h1>
       </div>
       <br/>
      <div>
        
         <div class="input-item">   
       <p style={{display:'flex'}}>
        <div class="col-md-3">
        Full Name :
        </div>
        
        
        <input class="rinput" type="text" placeholder="Enter Full Name" onChange={(e)=>setName(e.target.value)}/></p>
       
       <br/>
      
     <p style={{display:'flex'}}>
     <div class="col-md-3">
     Contact Number 1 :
        </div>
        
     <input class="rinput" type="text" placeholder="0123456789"onChange={(e)=>setNum1(e.target.value)}/></p>
       
       <br/>
      
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Contact Number 2 :
        </div>
        
       <input class="rinput" type="text" placeholder="1234567890" onChange={(e)=>setNum2(e.target.value)}/></p>
      
       <br/>
      
       <p style={{display:'flex'}}>
       <div class="col-md-3">
       Email Id:
        </div>
       <input class="rinput" type="text" placeholder="Email Id" onChange={(e)=>setEmail(e.target.value)}/></p>
    
       <br/>
      
       <p style={{display:'flex'}}>
       <div class="col-md-3">
       State: 
        </div>
       <select class="rinput" onChange={(e)=>setState(e.target.value)}>
       <option >Select </option>
       <option value='Andhra Pradesh'>Andhra Pradesh</option>
       <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
       <option value='Assam'>Assam</option>
       <option value='Bihar'>Bihar</option>
       <option value='Chhattisgarh'>Chhattisgarh</option>
       <option value='Goa'>Goa</option>
       <option value='Gujarat'>Gujarat</option>
       <option value='Haryana'>Haryana</option>
       <option value='Himachal Pradesh'>Himachal Pradesh</option>
       <option value='Karnataka'>Karnataka</option>
       <option value='Kerala'>Kerala</option>
       <option value='Madhya Pradesh'>Madhya Pradesh</option>
       <option value='Maharashtra'>Maharashtra</option>
       <option value='Punjab'>Punjab</option>
       <option value='Rajasthan'>Rajasthan</option>
       <option value='Telangana'>Telangana</option>
       <option value='Tripura'>Tripura</option>
       <option value='Uttar Prades'>Uttar Prades</option>
       
      
       </select></p>
      
       <br/>
      
     <p style={{display:'flex'}}>
     <div class="col-md-3">
     District:
        </div>
     <input class="rinput" type="text" placeholder="District" onChange={(e)=>setDist(e.target.value)}/></p>
      
       <br/>
       
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Taluka:
        </div>
        <input class="rinput" type="text" placeholder="Enter your Taluka"onChange={(e)=>setTal(e.target.value)}/></p>
      
       <br/>
       
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Enter City:
        </div>
        <input class="rinput" type="text"  placeholder="Enter your City/Village"onChange={(e)=>setCity(e.target.value)} /></p>
       
       <br/>
       
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Area :
        </div>
       <input class="rinput" type="text" placeholder="Enter area"onChange={(e)=>setArea(e.target.value)}/></p>
      
       <br/>
      
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Enter Pincode:
        </div>
       <input class="rinput" type="number" placeholder="203018"onChange={(e)=>setPin(e.target.value)}/></p> 
       
       <br/>
      
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Address:
        </div>
        <input class="rinput" type="text" placeholder="Address"onChange={(e)=>setAddress(e.target.value)} /></p>
      
       <br/>
      
    <p style={{display:'flex'}}>
    <div class="col-md-3">
    Landmark:
        </div>
       <input class="rinput" type="text" placeholder="Landmark"onChange={(e)=>setLandmark(e.target.value)} /></p>
       
       <br/>
       
      
        <p style={{display:'flex'}}>
        <div class="col-md-3">
        Select  Business: 
        </div>
         <select class="rinput" onChange={(e)=>setBus(e.target.value)}>Select
       <option >Select</option>
       <option >HomeMade Cake</option>
       <option value='Event Management'>Event Management</option>
       <option value='Fast Food'>Fast Food</option>
       <option value='Event Management'></option>
       <option value=' HomeMade chocolate'>HomeMade chocolate</option>
       <option value=' Homemade Soaps and Candles.'>Homemade Soaps and Candles.</option>
       <option value='Hand-made Craft Business'>Hand-made Craft Business</option>
       <option value='Online Coaching'>Online Coaching</option>
       <option value='Online Coaching Exercise and Yoga '>Online Coaching Exercise and Yoga</option>
       <option value='Clothing Store'>Clothing Store</option>
       <option value='candle-making '>candle-making</option>
       <option value=' Fabrication Services'>Fabrication Services</option>
       <option value='Producing Agarbatti '>Producing Agarbatti</option>
       <option value='Ice Cream Making'>Homemade Ice Cream Making</option>
       <option value='Tiffin Service '>Tiffin Service</option>
       <option value=' Wedding Services'>Wedding Services</option>
       <option value='American Diamond Jewellery '>American Diamond Jewellery </option>
       <option value=' Winter Wear'>Winter Wear</option>
       <option value=' TraditionalFood'>TraditionalFood</option>
       </select>
       </p>
       
       <br/>
      
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Enter Business:
        </div>
         <input class="rinput" type="text" placeholder="Enter your Business Name" onChange={(e)=>setbusName(e.target.value)}/></p> 
      
       <br/>
      
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Enter  Website:
        </div>
          <input class="rinput" type="text" placeholder="Enter your website Link"onChange={(e)=>setLink1(e.target.value)}/></p>
      
       <br/>
     
      <p style={{display:'flex'}}>
      <div class="col-md-3">
      Link: 
        </div>
        <input class="rinput" type="text" placeholder=" www.facebook.com"onChange={(e)=>setLink2(e.target.value)}/></p>
      
       <br/>
       <p style={{display:'flex'}}>
      <div class="col-md-3">
      Enter Image Url: 
        </div>
        <input class="rinput" type="text" placeholder=" Enter Url for your Business Image"onChange={(e)=>setImgUrl(e.target.value)}/></p>
      
       <br/>

       </div>
<button class="button-item" onClick={handleSubmit}>Submit
<i class="fa fa-user-plus" aria-hidden="true"></i>
 </button>
 <br/>
 </div>
</div>


<>
    
      <br />
      
      <Modal
        title=" Enter valid details"
        style={{ top: 20 }}
        centered
        open={modal2Open}
        onOk={handleSubmitmodal }
        onCancel={handleCancel}
      >
        <p>Enter your Email</p>
        
        <Input type='text' placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} prefix={<UserOutlined />} />
        <p><p>Enter your Password</p></p>
        <Input type='password' placeholder="enter password" onChange={(e)=>setUserPass(e.target.value)} prefix={<UnlockOutlined />} />
      </Modal>
    </>








</div>
 
</>
    );
    
    }
    export default Register;