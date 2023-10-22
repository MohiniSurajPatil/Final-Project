import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Css/Footer.css'

const Footer=()=>{

    return(
        <div className="footer-container">
        <div className="top-section">
            <div className="content-col">
                <div className="footer-heading">Address</div>
                <div className="footer-content add-content">Main Branch - B-23, Amber Park, Near Hotel GreenWays, Wakad, Pune-411057 </div>
                <div className="footer-content">Branch 2 - B-23, Amber Park, Near Hotel GreenWays, Wakad, Pune-411057 </div>
            </div>
            <div className="content-col">
                <div className="footer-heading">Contact</div>
                <div className="footer-content">+91 1231231231</div>
                <div className="footer-content">+91 1231231232</div>
                <div className="footer-content">gms@testmail.com</div>
            </div>
            <div className="content-col">
                <div className="footer-heading">Quick Menu</div>
                <div className="footer-content">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" aria-current="page" to="/contactus">ContactUs</Link>
                <Link className="nav-link" aria-current="page" to="/Faq">Faq</Link>
                    {/* <div><a className="click-item">Home</a></div>
                    <div><a className="click-item">About</a></div>
                    <div><a className="click-item">News</a></div>
                    <div><a className="click-item">Program</a></div> */}
                </div>
            </div>
            <div className="content-col">
                <div className="footer-heading">Types of Business</div>
                <div className="footer-content">
                    <div><h5>Event Management</h5></div>
                    <div><h5>Candle-making</h5></div>
                    <div><h5>Tiffin Service</h5></div>
                    <div><h5>Wedding Services</h5></div>
                    <div><h5>TraditionalFood, etc.</h5></div>
                </div>
            </div>
        </div>
        <div className="copyright-content">Copyright © 2022 All Rights Reserved | GMS Group</div>
    </div>
    
    
    );
    
    
    }
    export default Footer;