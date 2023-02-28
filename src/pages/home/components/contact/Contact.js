import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import profileImg2 from "../../../../assets/images/Dany-fato-perfil_2.jpg"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s7hg481',
      'template_bsbu7sy',
      form.current,
      'asWbGt4BDNeoiuktw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h1 className="section-title">Con<span>t</span>act</h1>
      <div className="container contact__container">
        <div className="contact__form">
          <h2>Write Me a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Your Name' required />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" rows="7" placeholder='Your Message' />
            <button type='submit' value="Send" className='btn btn-primary btn-form'>
              Send Message
            </button>
          </form>
        </div>
        <div className="contact__image">
          <img src={profileImg2} alt="profile-2" />
        </div>

      </div>
    </section>
  )
}

export default Contact