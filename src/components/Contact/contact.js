import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FecebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a25r9np', 'template_gfbrc6i', form.current, 'EnscSCEKkKl9UeRhGqeI1')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        }, (error) => {
          console.log(error.text);
        });
  };
  return (
    <section id="contactPage">
        <div id="clients">
<h1 className="contactPageTitle">My clients</h1>
<p className="clientDesc">
    I have had the opportunity to work with a diverse group of companies.
    Some of the notable companies I have worked with includes.
</p>
<div className="clientImgs">
      <img src={Walmart} alt="Client" className="clientImg" />
      <img src={Adobe} alt="Client" className="clientImg" />
      <img src={Microsoft} alt="Client" className="clientImg" />
      <img src={Facebook} alt="Client" className="clientImg" />


     </div>
        </div> 
        <div id="contact">
         <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
        <form className= "contactForm" ref={form} onSubmit={sendEmail}>
        <input text="text" className="name" placeholder="Your Name" name='your_name' />
       <input type="email" className="email"  placeholder='Your Email' name='your_email'/>
       <textarea className='msg' name="message" rows="5" placeholder='Your Message' ></textarea>
        <button type='submit' value='Send' className="submitBtn">Submit</button>
        <div className='links'>
            <img src={FecebookIcon} alt="Facebook" className="link"/>
            <img src={InstagramIcon} alt="Instragram" className="link"/>
            <img src={YouTubeIcon} alt="Youtube" className="link"/>
            <img src={TwitterIcon} alt="Twitter" className="link"/>
        </div>
        
        </form>
        </div>


    </section>
  );
};

export default Contact