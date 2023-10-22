
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import '../Css/MyProfile.css';
import { EditFilled } from '@ant-design/icons';
import { Input } from 'antd'
import {  Modal } from 'antd';
import axios from 'axios';


const MyProfileCard=({ContactPerson,RNumber1,RNumber2,Email,state,Dis,Tal, city, Area,Pincode,
    Address,Landmark,Bus,UserBus,web1,web2,img})=>{
      
      let [imgurl, setImgUrl]=useState('');
      let [busname, setbusName]=useState("");
      const [modal2Open, setModal2Open] = useState(false);
      const handleCancel=()=>{
        
      }
   
      
const handleUpdate=()=>{
  
  setModal2Open(true);

}

const handleRemove=(Email)=>{
    
axios.delete(`http://localhost:8000/deleteBusiness/:${Email}`);
alert("remove" )

}

const handleOk=(Email)=>{
alert(busname)
axios.patch(`http://localhost:8000/updateRegisterDetails` ,{
  "UserBus":busname,
 "Image":imgurl  });

 alert("Details Updated" )
  
    /*.then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error updating document', error);
    });*/
      setModal2Open(false);

}



    return(
      <>
    
    <div style={{marginLeft:'38rem'}}>
    <div className='bregister'>
 <Card style={{ width: '60rem',backgroundColor:'white' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        
        <Card.Title className='title'><b>Type of Business:{Bus}</b></Card.Title>
        
        <Card.Title className='contacttitle'><b>ContactPerson:</b>{ContactPerson}</Card.Title>
        <Card.Text className='address'>
        <b>Address: </b>{Address} {Area},
         Dis:{Dis},Tal:{Tal}, city:{city},
        Pincode:{Pincode},
        Landmark:{Landmark}, {state}
        </Card.Text>
        <Card.Text>
          <p><b>Contact Number:</b>{RNumber1} / {RNumber2}</p>
          <p><b>Email:</b>{Email}</p>
          <p><b>Product:</b>{UserBus}</p>
        </Card.Text>
      </Card.Body>
      
      <Card.Text >
        <Card.Link href="#"className='clink'><b>link1:</b>{web1}</Card.Link>
        <p>
        <Card.Link href="#"className='clink'><b>link2:</b>{web2}</Card.Link></p>
        
      </Card.Text>
      <Card.Text>
      <button style={{backgroundColor:"purple", color:'white', marginLeft:'20px', width:'30%'}} onClick={handleUpdate}>Update</button>
     <button style={{backgroundColor:"purple", color:'white', marginLeft:'200px', width:'30%'}} onClick={handleRemove}>Remove</button></Card.Text>
      <br/>
    </Card>
    
    </div>
    </div>
    <Modal
        title=" Enter valid details"
        style={{ top: 20 }}
        centered
        open={modal2Open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Enter your Business Types</p>
        
        <Input type='text' placeholder="Business Name"  prefix={<EditFilled/>} onChange={(e)=>setbusName(e.target.value)}/>
        <p><p>   Enter Image Url:  </p></p>
        <Input type='text' placeholder="Enter Url for your Business Image"  prefix={<EditFilled />} onChange={(e)=>setImgUrl(e.target.value)}/>
      </Modal>
     
</>
    )

}

export default MyProfileCard;