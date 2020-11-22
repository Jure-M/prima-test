import React, { useState, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../contexts/LanguageContext";

import { FaPhone, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";

import Banner from "../components/layout/Banner";

const content = {
  ENG: {
    contact: "Contact",
    contactUs: "Contact Us",
    description: `If you have any question or inquiry regarding your booking please contact us and we will gladly help
    you.`,
    placeholder: {
      name: "Name",
      email: "Email",
      message: "Writte your message",
    },
    send: "SEND",
  },
  HRV: {
    contact: "Kontakt",
    contactUs: "Kontaktirajte nas",
    description: `Ako imate bilo kakvih pitanja ili upita u vezi s rezervacijom, kontaktirajte nas i rado ćemo vam pomoći.`,
    placeholder: {
      name: "Ime",
      email: "Email",
      message: "Napišite poruku",
    },
    send: "POŠALJI",
  },
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { contact, description, placeholder, send, contactUs } = content[
    language
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && msg) {
      sendMessage(name, email, msg);
      setName("");
      setEmail("");
      setMsg("");
      setSuccess({ type: "success", msg: "Message sent" });
      setTimeout(() => {
        setSuccess(null);
      }, 4000);
    } else {
      setError({ type: "error", msg: "Please fill all fields" });
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  const sendMessage = async (name, email, message) => {
    try {
      await axios.post("/api/v1/send", {
        name,
        email,
        message,
      });
    } catch (error) {
      setError({
        type: "error",
        msg: "Something went wrong, please try again",
      });
    }
  };

  return (
    <>
      <Banner title={contactUs} />
      <section class="section-contact">
        <div class="container">
          <div class="contact">
            <div class="row">
              <div class="col-md-6 col-lg-5">
                <div class="text">
                  <h2>{contact}</h2>
                  <p>{description}</p>
                  <ul>
                    <li>
                      <FaMapMarkerAlt class="contact-icon" />
                      Split, Croatia
                    </li>
                    <li>
                      <FaPhone class="contact-icon" />
                      +385992745080
                    </li>
                    <li>
                      <FaEnvelopeOpen class="contact-icon" />
                      primalife.spalato@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-lg-offset-1">
                <div class="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="field-text"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          placeholder={placeholder.name}
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="field-text"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder={placeholder.email}
                        />
                      </div>

                      <div class="col-sm-12">
                        <textarea
                          cols="30"
                          rows="10"
                          name="msg"
                          onChange={(e) => setMsg(e.target.value)}
                          value={msg}
                          class="field-textarea"
                          placeholder={placeholder.message}
                        ></textarea>
                        {error ? (
                          <div class="error">
                            <p>{error.msg}</p>
                          </div>
                        ) : null}
                        {success ? (
                          <div class="succes">
                            <p>message sent</p>
                          </div>
                        ) : null}
                      </div>

                      <div class="col-sm-6">
                        <button type="submit" class="btn btn-room">
                          {send}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
