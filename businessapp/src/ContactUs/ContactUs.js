import '../ContactUs/Contactus.css';


import { useState } from 'react';


const ContactUS=()=>{

let [contactName, setContactName]=useState('');
let [contactEmail, setContactEmail]=useState();
let [contactNumber, setContactNumber]=useState();
let [message, setMessage]=useState();
let [contactList, setContactList]=useState([]);


const handleContactDetails=()=>{
	contactList={Name:contactName, Email:contactEmail, MobileNumber:contactNumber, Message:message};

	 contactList=JSON.stringify(contactList);
	localStorage.setItem(contactNumber,contactList);
if(contactName.length && contactEmail.length && contactNumber.length )
{
	alert("Submit your responce");
}
else {
	alert("Please fill all the details");
}

	


}


    return(
		<>
		<div>
		<div class="register-form">
					<div class="register-item">
						<p>Email us at: homeminister@gmail.com / Fill below details </p>

	
			   <h1> Contact Us</h1>
			   </div>
			   <br/>
			  <div>
				
				 <div class="input-item">   
			   <p style={{display:'flex'}}>
				<div class="col-md-3">
				Full Name :
				</div>
				
				
				<input class="rinput" type="text" placeholder="Enter Full Name" onChange={(e)=>setContactName(e.target.value)}/></p>
			   
			   <br/>
			  
			 <p style={{display:'flex'}}>
			 <div class="col-md-3">
			 Contact Number :
				</div>
				
			 <input class="rinput" type="text" placeholder="0123456789"onChange={(e)=>setContactNumber(e.target.value)}/></p>
			   
			   <br/>
			  
			   <p style={{display:'flex'}}>
			   <div class="col-md-3">
			   Email Id:
				</div>
			   <input class="rinput" type="text" placeholder="Email Id" onChange={(e)=>setContactEmail(e.target.value)}/></p>
			
			   <br/>
			   <p style={{display:'flex'}}>
			   <div class="col-md-3">
			   Write Message:
				</div>
				<textarea name="comment" form="usrform"  class="rinput" onChange={(e)=>setMessage(e.target.value)}>Enter Message here...</textarea>
                </p>
			
			   <br/>
			 
			   </div>
		<button class="button-item" onClick={handleContactDetails}>Submit
		
		<i class="fa fa-user-plus" aria-hidden="true"></i>
		
		 </button>
		 
		 <br/>
		 </div>
		</div>
		
		
		
		
		
		</div>
		 
		</>
    );
    
    }
    export default ContactUS;