
import React from 'react'
import { Button, Modal } from 'antd';
import  { useEffect, useState } from 'react';
import '../Css/MyProfile.css';
import { useNavigate } from 'react-router-dom';

import MyProfileCard from './MyProfileCard';


const MyProfile=({handleRemove})=>{

 
  const navigate = useNavigate();
 const [businesslist, setBusinessList]=useState([]);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [fdata, setFData]=useState([]);
 const [number, setUserNumber]=useState();




useEffect(()=>{
  setIsModalOpen(true);
  fetch('http://localhost:8000/getRegisterDetails')
  .then((temp)=>temp.json())
  .then((res) => setBusinessList(res))
  .catch((error)=>console.log(error))
 
},[])



useEffect(()=>{
setFData(businesslist.filter((data)=>data.RNumber1==number || data.RNumber2== number))
 
 
},[number])

console.log(businesslist);
console.log(fdata);
const handleOk=()=>{
 
  setIsModalOpen(false);
  console.log(fdata);
}


const handleCancel=()=>{
  setIsModalOpen(false)
  navigate('/');
}




    return(
      <>
    
      <Modal title="Mobile number should be same as the business details" open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}>
        <h5> Enter Mobile Number </h5>
      <input type='text' placeholder='Enter your mobile number'onChange={(e)=>setUserNumber(e.target.value)}/>
        
      </Modal>
{
fdata.length ?

fdata.map((info)=><MyProfileCard ContactPerson={info.ContactPerson} 
RNumber1={info.RNumber1}
 RNumber2={info.RNumber2} Email={info.Email} Dis={info.Dis} Tal={info.Tal}  city={info.city} Area={info.Area} Pincode={info.Pincode}
Address={info.Address} Landmark={info.Landmark} Bus={info.Bus} UserBus={info.UserBus} web1={info.web1} web2={info.web2} img={info.Image}/>)
:
null
}
</>
    )

}

export default MyProfile;