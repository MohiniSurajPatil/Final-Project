import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import SignIn from "./SignIn";
import Register from "./Register";
import ContactUS from "../ContactUs/ContactUs";
import Faq from "./Faq";
import MyProfile from "./MyProfile";
import SignUp from "./SignUp";




 const Routing=()=>{



return(
<div>
    <Routes>
   
        <Route path="/" element={<Home/>} />

       
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/ContactUs" element={<ContactUS/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/MyProfile" element={<MyProfile/>}/>
    </Routes>

</div>

);

 }
 export default Routing;