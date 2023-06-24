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
          <img src={gmail} alt="" width="50"></img>
          <div className="tag">
            jainharshit518@gmail.com
          </div>
          <div className="download-resume">
          <a href={require("../../../assets/pdf/Resume_Hj.pdf").default}>
            <i style={{ padding: '0.3rem' }} class="fi-rr-cloud-download download-icon "></i>
            Resume
          </a>
        </div>
        </div>
        {/* <div className="download-resume">
          <a href={require("../../../assets/pdf/Resume_Hj.pdf").default}>
            <i style={{ padding: '0.5rem' }} class="fi-rr-cloud-download download-icon "></i>
            Resume
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Contact;
