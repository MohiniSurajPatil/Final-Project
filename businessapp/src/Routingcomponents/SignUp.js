import {  useEffect, useState } from "react";
import '../Css/Signin.css';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{

    const navigate = useNavigate();
let [useraction, setUserAction]=useState('Sign Up');


let [name, setName]=useState('');
let [emailId, setEmailId]=useState('');
let [userpass, setUserPass]=useState('');
 


const handleSubmit =  () => {
 
  setUserAction("Sign Up");
  try {
    // Make an API request to register the user
     axios.post('http://localhost:8000/signup', {"name":name,"emailId":emailId, "userpass":userpass});
    // Redirect or show a success message
    navigate('/');
    alert("created sucsessfully");
  } 
  

  catch (error) {
    // Handle errors
    console.log(error);
  }
};


  const handleLogin=()=>{
    navigate('/SignIn');
}


  
const handleSignup=()=>{
 setUserAction("Sign Up");
  /* if(emailId.length==0 && userpass.length==0)
{
  setCount(1);
}
else if(emailId.length && (userpass.length>= 8)){
 
localStorage.setItem(emailId, userpass);

alert("userId and Password created successfully")
}*/
}



    return(
		
    <div>



<div className="form">

<div class="con">
   
 
   <div class="field-set">
 
<div className="container">
<div className="header">
  <p style={{ color: ' rgb(71, 70, 71)', fontSize: '2.5em' }}>होम मिनिस्टर</p>
  <div className="text">Sign Up</div>
<div className="underline"></div>

</div>
<div className="inputs">
  {
    useraction==="Log In" ? <div></div>: <div className="input">
    <img src="./Assets/user1.png"/>
    <input type="text" name="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
    
    </div>
  }

<div className="input">
<img src="./Assets/email.png"/>
<input type="email"   placeholder="Email" onChange={(e)=>setEmailId(e.target.value)}/>

</div>
<div className="input">
<img src="./Assets/password.png"/>
<input type="password" placeholder="Password" onChange={(e)=>setUserPass(e.target.value)}/>

</div>

</div>
{useraction==="Sign Up" ? <div></div> :<div className="forgot-password">Forgot Password <span>Click here</span></div>}

<div className="submit-container">
<div ><button className={useraction==="Log In"?"submit gray" :"submit"} onClick={handleSubmit} > Sign Up</button></div>
<div ><button className={useraction==="Sign Up"?"submit gray" :"submit"}  onClick={handleLogin}> Log In</button></div>
</div>
</div>

     

   </div>
 

</div>



</div>





    
</div>  
		
	);
}
export default SignUp;