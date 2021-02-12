import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
   

    return (
        <section className="contact_section" id="contact">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" placeholder="Type Your Message..." id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Send" className="contact__button button"/>
                    </form>
                </div>
            <div className="about">
            <h2>Contact Details</h2>
             <div className="widget widget_tweets">
                <h4>Head Office</h4>
                <p className="address">
                   87 abdel aziz fahmy , Cairo , Egypt

                </p>
             </div>
             <div className="widget widget_tweets">
                <h4>Phone</h4>
                <p className="address">
                +(20) 01157551041
                </p>
             </div>
             <div className="widget widget_tweets">
             <h4>Fax</h4>
             <p className="address">
             +(20) 01157551041 / +(30) 01155751042
             </p>
          </div>
             <div className="widget widget_tweets">
               <h4>E-mail</h4>
               <p className="address">
                  info@rebuxegypt.eg
               </p>
		    </div>
            </div>
            </section>
    );
}

export default ContactUs;
