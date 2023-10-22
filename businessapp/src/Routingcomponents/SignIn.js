import {  useEffect, useState } from "react";
import '../Css/Signin.css';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignIn = () =>
{

let [useraction, setUserAction]=useState('');
const navigate = useNavigate();


useEffect(()=>{setUserAction("Sign Up")},[])


let [emailId, setEmailId]=useState('');
let [userpass, setUserPass]=useState('');
 

 


const handleLogIn = () => {
  
  setUserAction("Log In");
  try {
    // Make an API request to register the user
     axios.post('http://localhost:8000/login', {"emailId":emailId, "userpass":userpass});
    // Redirect or show a success message
    navigate('/');
    alert("LogIn suc");

  } 
  catch (error) {
    // Handle errors
    console.log(error);
  }
};



  
const handleSignUp=()=>{
  navigate('/SignUp');
}



    return(
		
    <div>



<div className="form">

<div class="con">
   
 
   <div class="field-set">
 
<div className="container">
<div className="header">
  <p style={{ color: ' rgb(71, 70, 71)', fontSize: '2.5em' }}>होम मिनिस्टर</p>
  <div className="text">LogIn</div>
<div className="underline"></div>

</div>
<div className="inputs">
 

<div className="input">
<img src="./Assets/email.png"/>
<input type="email" name="email"  placeholder="Email" onChange={(e)=>setEmailId(e.target.value)}/>

</div>
<div className="input">
<img src="./Assets/password.png"/>
<input type="password" name="password" placeholder="Password" onChange={(e)=>setUserPass(e.target.value)}/>

</div>

</div>
{useraction==="Sign Up" ? <div></div> :<div className="forgot-password">Forgot Password <span>Click here</span></div>}

<div className="submit-container">
<div ><button className={useraction==="Sign Up"?"submit gray" :"submit"} onClick={handleSignUp}> Sign Up</button></div>
<div ><button className={useraction==="Log In"?"submit gray" :"submit"}  onClick={handleLogIn}> Log In</button></div>
</div>
</div>

     

   </div>
 

</div>



</div>





    
</div>  
		
	);
}
export default SignIn;