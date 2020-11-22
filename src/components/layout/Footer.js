import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

import primaLogo from "../../images/prima_logo.png";

const content = {
  ENG: {
    location: "Location",
    address: "Adress",
    city: "City",
    country: "Country",
    contact: "Contact",
    followUs: "Follow Us",
    copyrights: "Copyrights by Prima Life Spalato",
  },
  HRV: {
    location: "Lokacija",
    address: "Adresa",
    city: "Grad",
    country: "Zemlja",
    contact: "Kontakt",
    followUs: "Pratite nas",
    country: "Autorska prava Prima Life Spalato",
  },
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const {
    location,
    address,
    city,
    country,
    contact,
    followUs,
    copyrights,
  } = content[language];

  return (
    <footer class="footer-sky">
      <div class="footer-mid">
        <div class="container">
          <div class="padding-footer-mid">
            <div class="footer-item">
              <div class="footer-logo text-center list-content">
                <a href="index.html" title="Skyline">
                  <img src={primaLogo} alt="Image" />
                </a>
              </div>
            </div>
            <div class="footer-item">
              <div class="list-content">
                <ul>
                  <li>
                    <h6 class="footer-title">{location}</h6>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>{address}:</span> Trg Bulata 5
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>{city}:</span> Split
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>{country}:</span> Croatia
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-item">
              <div class="list-content">
                <ul>
                  <li>
                    <h6 class="footer-title">{contact}</h6>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>Tel:</span> +385992745080
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>Mob:</span> +385992745080
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>Email:</span> primalife.spalato@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-item">
              <div class="list-content">
                <ul>
                  <li>
                    <h6 class="footer-title">{followUs}</h6>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>
                        <FaFacebook />
                      </span>{" "}
                      Facebook
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>
                        <FaInstagram />
                      </span>{" "}
                      Instagram
                    </p>
                  </li>
                  <li>
                    <p class="footer-text">
                      <span>
                        <FaTripadvisor />
                      </span>{" "}
                      Tripadvisor
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copy">
            <p>{copyrights}</p>
            <FaFacebook class="footer-icons" />
            <FaInstagram class="footer-icons" />
            <FaTripadvisor class="footer-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
