import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
   

    return (
        <section className="contact_section" id="contact">
            <div className="section-title">        
                 <h2 >Contact Us</h2>
                 <span></span>
             </div>
               

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <input type="text" placeholder="Subject" className="contact__input" />
                        <textarea name="" placeholder="Type Your Message..." id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Send" className="contact__button button"/>
                    </form>
                </div>
            <div className="about">
            <h2>Contact Details</h2>
             <div className="widget widget_tweets">
                <h4>Head Office :</h4>
                <p className="address"> 
                87 Abdel Aziz Fahmy St. Heliopolis, Saint Fatima, Cairo, Egypt
                </p>
             </div>
             <div className="widget widget_tweets">
                <h4>Phone :</h4>
                <p className="address">
                +202-27756480 / +202-27756481
                </p>
             </div>
             <div className="widget widget_tweets">
             <h4>Fax :</h4>
             <p className="address">
             +202-27757517
             </p>
          </div>
             <div className="widget widget_tweets">
               <h4>E-mail :</h4>
               <p className="address">
               info@rubexegypt.eg
               customerservice@rubexegypt.eg
               sales@rubexegypt.eg
               export@rubexegypt.eg
               </p>
		    </div>
          <div className="widget widget_tweets">
               <h4>Factories :</h4>
               <p className="address">
               New Borg El Arab City Third Industrial Zone Alexandria, Egypt
               </p>
		    </div>
            </div>
            </section>
    );
}

export default ContactUs;
