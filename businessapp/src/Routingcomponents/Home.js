
import { useEffect, useState } from 'react';
import Homecard from '../Components/Homecard';
import Homeslider from '../Components/Homeslider';
import HomeBusiness from '../Components/HomeBusiness';
import '../Css/Search.css';
import { Divider ,Input} from 'semantic-ui-react';
import BusinessRegisterCard from '../Components/BusinessRegisterCard';
import React from 'react'


const Home=()=>{
 let Businesstypes=[
 {image:'./Images/TraditionalFood.jpg', heading:"Traditional Food", Description:"Corporate Party Order,Thali, Snack Box,Function Orders",range:10 },
 {image:'./Images/EventManagement.jpeg', heading:"Event Management", Description:"Real Flowers Decoration,Marriage Hall Booking,Wedding Planner",range:12 },
 {image:'./Images/cake2.jpeg', heading:"Homemade Cake", Description:"Birthday Cake, Wedding cake, kid's special cake, Red Velvet Cake.",range:20 },
 {image:'./Images/TiffinServices.jpg', heading:"Tiffin Services", Description:"Lunch Box, veg, non-veg, Vegetable Poha with Chivda,Rajma Chawal.",range:22 },
 {image:'./Images/Fastfood.jpg', heading:"Fast Food", Description:"sandwiches, fried chicken, french fries, onion rings, chicken nuggets",range:25 }
];

let [search, setSearch]=useState("");
let [fData,setFData]=useState([]);
/*let bRegisterInfo=
  [{ 
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
    }
    
   ]*/
 
   let [businesslist, setBusinessList]=useState([]);
  
    fetch('http://localhost:8000/getRegisterDetails')
   .then((temp)=>temp.json())
   .then((res) => setBusinessList(res))
   .catch((error)=>console.log(error))


   useEffect(()=>{
    
    setFData(  businesslist.filter((info)=>info.Pincode==search)
   )}
   
   ,[search]) 



console.log(businesslist)
return(
<div >

   <div style={{ height:'80px', backgroundColor:' rgb(190, 8, 129)'}}>
   <div className='homesearch'>

<Input type='text'
style={{  borderradius: '20px',width:'60%', height: '100%'}} 
    icon='search' iconPosition='right' placeholder='Search business by pincode...'  onChange={(e)=>setSearch(e.target.value)} />

</div>

</div>
{
fData.length ?
fData.map((info)=>
<BusinessRegisterCard ContactPerson={info.ContactPerson} 
RNumber1={info.RNumber1}
 RNumber2={info.RNumber2} Email={info.Email} state={info.state} Dis={info.Dis} Tal={info.Tal} City={info.City} Area={info.Area} Pincode={info.Pincode}
Address={info.Address} Landmark={info.Landmark} Bus={info.Bus} UserBus={info.UserBus} web1={info.web1} web2={info.web2} img={info.Image}  />)
:
/*businesslist.map((info)=>
<BusinessRegisterCard ContactPerson={info.ContactPerson} 
RNumber1={info.RNumber1}
 RNumber2={info.RNumber2} Email={info.Email} Dis={info.Dis} Tal={info.Tal}  city={info.city} Area={info.Area} Pincode={info.Pincode}
Address={info.Address} Landmark={info.Landmark} Bus={info.Bus} UserBus={info.UserBus} web1={info.web1} web2={info.web2} img={info.Image} />)
}*/
null
}

<br/>
<Homeslider/>

<HomeBusiness/>

<div className='flex-container'>
{
Businesstypes.map((Business)=><Homecard image={Business.image} heading={Business.heading} Description={Business.Description} range={Business.range}/>)
}
</div>
<br/>
<br/>
<Divider horizontal ></Divider>


<img style={{width:"100%", padding:'2%'}} src="/Images/newimg.png "/>
</div>



);

}
export default Home;