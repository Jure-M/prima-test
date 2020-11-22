import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

import { LanguageContext } from "../../contexts/LanguageContext";

import primaLogo from "../../images/prima_logo.png";

const content = {
  ENG: {
    home: "home",
    rooms: "rooms",
    about: "about",
    contact: "contact us",
    excursions: "excursions",
  },
  HRV: {
    home: "Početna",
    rooms: "Sobe",
    about: "O nama",
    contact: "Kontakt",
    excursions: "Izleti",
  },
};

const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { home, rooms, about, contact, excursions } = content[language];

  const [dropdownOpen, setdropdownOpen] = useState(false);

  const handleDropdown = () => {
    setdropdownOpen(!dropdownOpen);
  };

  const todo = (
    <NavItem class="nav-item">
      <Link class="nav-link" to="/excursions">
        {excursions}
      </Link>
    </NavItem>
  );
  return (
    <>
      <header className="header-sky">
        <div class="container">
          <div class="header-top">
            <div class="header-top-left">
              <span>
                <i class="ion-android-cloud-outline"></i>18 °C
              </span>
              <span>
                <i class="ion-ios-location-outline"></i> Trg bulata 5, Split
              </span>
              <span>
                <i class="fa fa-phone" aria-hidden="true"></i> +385 99 274 50 86
              </span>
            </div>
            <div class="header-top-right">
              <ul>
                <li
                  class={dropdownOpen ? `dropdown dropdown-active` : `dropdown`}
                >
                  <a onClick={handleDropdown} className="dropdown-toggle">
                    {language} <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <li class={language === "HRV" ? "active" : null}>
                      <a
                        onClick={(e) => {
                          changeLanguage(e);
                          handleDropdown();
                        }}
                      >
                        HRV
                      </a>
                    </li>
                    <li class={language === "EN" ? "active" : null}>
                      <a
                        onClick={(e) => {
                          changeLanguage(e);
                          handleDropdown();
                        }}
                      >
                        ENG
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div class="menu-header">
        <div class="container mavbar">
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link class="navbar-brand" to="/" title="Prima Life">
                <img src={primaLogo} alt="#" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle class="nav-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav class="navbar-nav ml-auto">
                <NavItem class="nav-item">
                  <Link class="nav-link" to="/">
                    {home}
                  </Link>
                </NavItem>
                <NavItem class="nav-item">
                  <Link class="nav-link" to="/rooms">
                    {rooms}
                  </Link>
                </NavItem>

                <NavItem class="nav-item">
                  <Link class="nav-link" to="/about">
                    {about}
                  </Link>
                </NavItem>

                <NavItem class="nav-item">
                  <Link class="nav-link" to="/contact">
                    {contact}
                  </Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
