
import { Link } from "react-router-dom";
import '../Css/Navbar.css'

const Navbar=()=>{

  //<li><img style={{height:'70px', width:'70px'}} src="./Images/images.jpeg"/></li>


return(
<div>

<div> 
<ul className='nav-ul'>
<li><img style={{height:'70px', width:'70px'}} src="./Images/Logo.jpeg"/></li>
<li style={{ color: 'yellow', fontSize: '2.5em' }}>होम मिनिस्टर</li>
    <li><Link to="/"> Home</Link> </li>
   <li><Link to="/ContactUs"> ContactUs</Link> </li>
   <li><Link to="/Faq"> Faq</Link> </li>
   <li><Link to="/SignIn"  > Lognin </Link> </li>
   <li><Link to="/SignUp"  > SignUp </Link> </li>
   
  <li><Link to="/Register">Add Business</Link> </li>
  <li><Link to="/MyProfile">My Profile</Link> </li>
  
</ul>

</div>

</div>

);

}
export default Navbar;