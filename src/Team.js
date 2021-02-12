import React from 'react'
import "./Team.css"

function Team() {
    return (
        <div className="team">
           <div className="container">
             <div className="left_box">
                <img src="./images/team--1.png" alt=""/>
                <div className="paragraph">
                <p>I struggled just to get out of bed. Every morning, the alarm clock would ring. I knew I should get up and deal but anxiety rushed in and I’d hit the snooze button instead. Here’s the thing.</p>
                <a href=" ">See More</a>
                </div>
             </div>
             <div className="right_box">
               <div className="small_box">
                <p>Our</p>
                <span></span>
                <h1>Team Membres</h1>
               </div>
               <img src="./images/team--2.png" alt=""/>
             </div>
           
           </div>
          </div>
    )
}

export default Team
