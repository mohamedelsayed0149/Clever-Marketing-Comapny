import React from 'react'
import "./Team.css"
import Team1 from "./images/team--1.png";
import Team2 from "./images/team--2.png";

function Team() {
    return (
        <div className="team">
           <div className="container">
             <div className="left_box">
                <img src={Team1} alt=""/>
                <div className="paragraph">
                <p>Our ability to provide outstanding results for our clients starts with our team of hard work experts.
                We come from a diverse set of experiences that
                range from Engineers and workers to deliver the best quality with the perfect price.</p>
                <a href=" ">See More</a>
                </div>
             </div>
             <div className="right_box">
               <div className="small_box">
                <p>Our</p>
                <span></span>
                <h1>Team Membres</h1>
               </div>
               <img src={Team2} alt=""/>
             </div>
           
           </div>
           <div className="lines-teams">
           <span className="line1-teams"></span>
           <span className="line2-teams"></span>
           <span className="line3-teams"></span>
          </div>
          </div>
    )
}

export default Team
