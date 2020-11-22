import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { LanguageContext } from "../contexts/LanguageContext";
import { RoomsContext } from "../contexts/RoomsContext";

import Banner from "../components/layout/Banner";
import CheckOutCart from "../components/CheckOutCart";

const content = {
  ENG: {
    reservationDetails: "RESERVATION DETAILS",
    firstName: "First Name",
    lastName: "Last Name",
    city: "City",
    country: "Country",
    phone: "Phone",
    message: "Message",
    reserve: "Reserve",

    placeholder: {
      name: "Name",
      surname: "Surname",
      email: "Email Address",
      address: "Street Adress",
      message: "Writte your message",
      notes: "Notes about your reservation, eg. special request",
    },
  },
  HRV: {
    reservationDetails: "DETALJI REZERVACIJE",
    firstName: "Ime",
    lastName: "Prezime",
    city: "Grad",
    country: "Zemlja",
    phone: "Telefon",
    message: "Poruka",
    reserve: "Rezerviraj",

    placeholder: {
      name: "Ime",
      surname: "Prezime",
      email: "Email Adresa",
      address: "Kućna adresa",
      message: "Napišite poruku",
      notes: "Napomene o rezervaciji, npr. posebni zahtjevi",
    },
  },
};

const CheckOut = () => {
  const { language } = useContext(LanguageContext);
  const {
    reservationDetails,
    firstName,
    lastName,
    city,
    country,
    phone,
    message,
    reserve,
    placeholder,
  } = content[language];

  const {
    state: { cart },
  } = useContext(RoomsContext);

  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    const { name, surname, email, message, telephone, city, country } = form;
    if (name && surname && email && message && telephone && city && country) {
      sendMessage(
        name,
        surname,
        email,
        message,
        telephone,
        city,
        country,
        cart
      );
      setForm({});
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

  const sendMessage = async (
    name,
    surname,
    email,
    message,
    telephone,
    city,
    country,
    cart
  ) => {
    try {
      await axios.post("/api/v1/send", {
        name,
        surname,
        email,
        message,
        telephone,
        city,
        country,
        cart,
      });
    } catch (error) {
      setError({
        type: "error",
        msg: "Something went wrong, please try again",
      });
    }
  };

  if (cart.length > 0) {
    return (
      <>
        <Banner title={"Check out"} />
        <section class="section-reservation-page">
          <div class="container">
            <div class="reservation-page">
              <div class="row">
                <div class="col-md-4 col-lg-3">
                  <CheckOutCart />
                </div>
                <div class="col-md-8 col-lg-9">
                  <div class="reservation_content">
                    <div class="reservation-billing-detail">
                      <h4>{reservationDetails}</h4>

                      <div class="row">
                        <div class="col-sm-6">
                          <label>
                            {firstName}
                            <sup> *</sup>
                          </label>
                          <input
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={placeholder.name}
                          />
                        </div>
                        <div class="col-sm-6">
                          <label>
                            {lastName}
                            <sup> *</sup>
                          </label>
                          <input
                            value={form.surname}
                            onChange={(e) =>
                              setForm({ ...form, surname: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={placeholder.surname}
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-6">
                          <label>
                            {city}
                            <sup> *</sup>
                          </label>
                          <input
                            value={form.city}
                            onChange={(e) =>
                              setForm({ ...form, city: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={placeholder.address}
                          />
                        </div>
                        <div class="col-sm-6">
                          <label>
                            {country}
                            <sup> *</sup>
                          </label>
                          <input
                            value={form.country}
                            onChange={(e) =>
                              setForm({ ...form, country: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={country}
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <label>
                            Email<sup> *</sup>
                          </label>
                          <input
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={placeholder.email}
                          />
                        </div>
                        <div class="col-sm-6">
                          <label>
                            {phone}
                            <sup> *</sup>
                          </label>
                          <input
                            value={form.telephone}
                            onChange={(e) =>
                              setForm({ ...form, telephone: e.target.value })
                            }
                            type="text"
                            class="input-text"
                            placeholder={phone}
                          />
                        </div>
                      </div>
                      <label>{message}</label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        class="input-textarea"
                        placeholder={placeholder.notes}
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
                      <button onClick={handleSubmit} class="btn btn-room btn4">
                        {reserve}
                      </button>
                    </div>
                  </div>
                </div>
                {/* billing ends */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return <Redirect to="/" />;
};

export default CheckOut;
