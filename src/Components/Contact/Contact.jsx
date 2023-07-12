import React, {useEffect} from "react";
import "./Contact.css";

import Aos from 'aos';
import 'aos/dist/aos.css';


import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv6xk1j",
        "template_fvue0f8",
        form.current,
        "ahktyf0iFg1Yx2O8n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact container" id="contact">
      <h2>Contact Me</h2>
      <span>Get In Touch</span>

      <div className="c-container">
        <div className="c-options">
          <article className="c-option">
            <HiOutlineMail className="c-option-icon" />
            <div className="c-email" data-Aos="fade-left">
              <h4>Email</h4>
              <h5>anuragregmi35@gmail.com</h5>
            </div>
          </article>

          <article className="c-option">
            <AiOutlineInstagram className="c-option-icon" />
            <div className="c-email" data-Aos="fade-left">
              <h4>Instagram</h4>
              <h5>anurag.regmi.02</h5>
            </div>
          </article>

          <article className="c-option">
            <GoLocation className="c-option-icon" />
            <div className="c-email" data-Aos="fade-left">
              <h4>Location</h4>
              <h5>Chitwan, Nepal</h5>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} data-Aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{ color: "var(--color-secondary)" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{ color: "var(--color-secondary)" }}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
            style={{ color: "var(--color-secondary)" }}
          />
          <button className="button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
