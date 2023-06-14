import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import "./contact.css"
import gmail from '../../../assets/images/icons/gmail.svg'
function Contact() {
    return (
        <div className="contact">
         <Separator />
           <label className="section-title">Contact</label>
           <div className="contact-container">
            <div className="contact-left">
             <p>Want to get in touch? </p>
              <img src={gmail} alt="" width="30"></img>
              <text style={{padding:'1rem'}}>"jainharshit518@gmail.com"</text>
             <SocialContact />
            </div>
            <div className="download-resume">
                <a href={require("../../../assets/pdf/Resume_Hj.pdf").default}>
                <i class="fi-rr-cloud-download download-icon"></i>
                  Download Resume
                </a> 
            </div>
           </div>
        </div>
    )
}

export default Contact;
