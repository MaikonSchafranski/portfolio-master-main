import "./contact.css";

import emailjs from "@emailjs/browser";
import React from "react";
import { useState } from "react";

import github from "../../assets/25231.png";
import angular from "../../assets/angular.png";
import css from "../../assets/css-3.png";
import facebook from "../../assets/facebook-colorido.png";
import html from "../../assets/html.png";
import spring from "../../assets/icons8-spring-boot-480.png";
import instagram from "../../assets/instagram-colorido.png";
import java from "../../assets/java.png";
import javascript from "../../assets/js.png";
import rec from "../../assets/React.png";
import typeScript from "../../assets/typescript.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_onx2ktc",
        "template_6hf0zef",
        templateParams,
        "ZoGTFuutnAQTNWEjw"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="knowledge">
        <h1 className="contactPageTitle">Conhecimentos</h1>
      </div>
      <div className="knowledgeImgs">
        <img src={html} alt="knowledge" className="knowledgeImg" />
        <img src={css} alt="knowledge" className="knowledgeImg" />
        <img src={javascript} alt="knowledge" className="knowledgeImg" />
        <img src={rec} alt="knowledge" className="knowledgeImg" />
        <img src={angular} alt="knowledge" className="knowledgeImg" />
        <img src={typeScript} alt="knowledge" className="knowledgeImg" />
        <img src={java} alt="knowledge" className="knowledgeImg" />
        <img src={spring} alt="knowledge" className="knowledgeImg" />
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contrate-me</h1>
        <span className="contactDesc">
          Preencha o formulário abaixo para debater possíveis oportunidades de
          emprego.
        </span>

        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button className="submitBtn" type="button" onClick={sendEmail}>
            Enviar
          </button>
        </form>

        <div className="links">
          <a
            className="link-icons"
            href="https://www.facebook.com/maikon.schafranski.771"
          >
            <img className="links-icon" src={facebook} alt="facebook" />
          </a>

          <a href="https://www.instagram.com/maikon.schafranski/">
            <img className="links-icon" src={instagram} alt="instagram" />
          </a>

          <a href="https://github.com/MaikonSchafranski">
            <img className="links-icon" src={github} alt="github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
