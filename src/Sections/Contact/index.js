import React from "react";
import emailjs from "emailjs-com";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44k8zed",   // EmailJS service ID
        "template_tmhvr52", // EmailJS template ID
        e.target,
        "kkBkqPs2inESlgMCp" // EmailJS user ID (public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icons>
        <a href="https://www.facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/giri48">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/glint_ar_vr">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/glint._.ar/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form onSubmit={sendEmail}>
        <Row>
          <input name="user_name" type="text" placeholder="Your Name" required />
          <input
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Row>
        <textarea
          name="message"
          cols="30"
          rows="2"
          placeholder="Your Message"
          required
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
