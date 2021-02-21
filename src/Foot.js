import React from 'react'
import './Foot.css';
import Footer from './images/footer.png' 
import { FiFacebook } from "react-icons/fi";
import {  AiOutlineTwitter} from "react-icons/ai";
import {  FiMail} from "react-icons/fi";


function Foot() {
    return (
        <div className="foot">
           <div className="logo-foot">
           <img src={Footer} alt="footer" />
           </div>
           <div className="content-foot">
            <div className="title-foot">
             <h2>About Rebux</h2>
             <ul>
             <li>Vision & Mission</li>
             <li>Team member</li>
             <li>Breif about Rebux</li>
             </ul>
            </div>
            <div className="title-foot">
             <h2>Products</h2>
             <ul>
             <li>Plastic products</li>
             <li>Sanitary ware</li>
             <li>Acrykic sheets</li>
             </ul>
             <h2>Distributers</h2>
            </div>
            <div className="title-foot" id="fact">
             <h2>Factories</h2>
             <ul>
             <li>Polyester Factory</li>
             <li>Acrylic Manufacturing</li>
             <li>Shower Cabin Factory</li>
             <li>Mold Formatinf Factory</li>
             <li>Glass Formatinf Factory</li>
             <li>Glass Formatinf Factory</li>
             <li>Glass Formatinf Factory</li>
             </ul>
            </div>
            <div className="title-foot" id="invest">
            <h2>Investor relations</h2>
            <ul>
            <li>Strength & Strategy</li>
            <li>Brands of directors</li>
            <li>Persentation</li>
            <li>Acrykic sheets</li>
            <li>Acrykic sheets</li>
            <li>Acrykic sheets</li>
            <li>Acrykic sheets</li>
            <li>Acrykic sheets</li>
            <li>Acrykic sheets</li>
            </ul>
            <h2>Contact Us</h2>
           </div>
            
           </div>
           <div className="icons-foot">
              <a href=" "><FiFacebook id="icon"/></a>
              <a href=" "><AiOutlineTwitter id="icon"/></a>
              <a href=" "><FiMail id="icon" /></a>
              <h2>Terms & Condition</h2>
           </div>
        </div>
    )
}

export default Foot
