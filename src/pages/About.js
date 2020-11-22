import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import Banner from "../components/layout/Banner";

import image1 from "../images/about-1.jpg";
import image2 from "../images/about-2.jpg";

const content = {
  ENG: {
    aboutUs: "ABOUT US",
    descriptionAbout1: `Being centrally located and just a few steps away from all the restaurants, bars and main tourist sites
    in the city but also equipped with elegant and quiet rooms, Prima Life Spalato hotel offers a perfect
    base for exploring the city.`,
    descriptionAbout2: `Ten elegant and modern rooms equipped with all needed for a perfect
    holiday, personal attention and intimate atmosphere will exceed your expectations and provide
    comfortable stay for all of our guests. We will be happy to accommodate you and make your stay in
    Split memorable.`,
    whyUs: "WHY GUEST CHOOSE PRIMA LIFE?",
    whyUsdescription1: `The best reason for choosing Prima Life for your stay in Split is our location. Located on a third floor
    of famous Prima Grad shopping mall which dates all the way back to year 1966, making it first
    shopping mall in Split. `,
    whyUsdescription2: `Prima is situated in the heart of the city and just a few minutes from all main
    attractions, offering our guests unique atmosphere and experience. Extraordinary location, personal
    approach to all of our guests, friendly staff and the best service will make your stay here
    unforgettable
    .`,
    placeholder: {
      name: "Name",
      email: "Email",
      message: "Writte your message",
    },
    send: "SEND",
  },
  HRV: {
    aboutUs: "O NAMA",
    descriptionAbout1: `It is a long established fact that a reader will be
    distracted by the readable content of a page when looking
    at its layout. The point of using Lorem Ipsum is that it
    has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it
    look like readable English. Many desktop publishing
    packages and web page editors now use Lorem Ipsum as their
    default model text, and a search for 'lorem ipsum' will
    uncover many web sites still in their infancy..`,
    whyUsdescription1: `There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in
    some form, by injected humour, or randomised words which
    don't look even slightly believable. If you are going to
    use a passage of Lorem Ipsum, you need to be sure`,
    whyUs: "ZAŠTO GOSTI BIRAJU PRIMA LIFE?",
    whyUsdescription1: `It is a long established fact that a reader will be
    distracted by the readable content of a page when looking
    at its layout. The point of using Lorem Ipsum is that it
    has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it
    look like readable English. Many`,
    whyUsdescription2: `desktop publishing packages and web page editors now use
    Lorem Ipsum as their default model text, and a search for
    'lorem ipsum' will uncover many web sites still in their
    infancy. Various versions have evolved over the years,
    sometimes by accident, sometimes on purpose (injected
    humour and the like).`,
    placeholder: {
      name: "Ime",
      email: "Email",
      message: "Napišite poruku",
    },
    send: "POŠALJI",
  },
};

const About = () => {
  const { language } = useContext(LanguageContext);
  const {
    aboutUs,
    descriptionAbout1,
    descriptionAbout2,
    whyUsdescription1,
    whyUsdescription2,
    whyUs,
    contactUs,
  } = content[language];

  return (
    <>
      <Banner title={aboutUs} />
      <section class="section-about">
        <div class="container">
          <div class="row">
            <div class="wrap-about">
              <div class="about-item">
                <div class="img">
                  <img src={image1} alt="#" />
                </div>
                <div class="text">
                  <h2 class="heading">{aboutUs}</h2>
                  <div class="desc">
                    <p>{descriptionAbout1}</p>
                    <br />
                    <p>{descriptionAbout2}</p>
                  </div>
                </div>
              </div>

              <div class="about-item">
                <div class="text">
                  <h2 class="heading">{whyUs}</h2>
                  <div class="desc">
                    <p>{whyUsdescription1}</p>
                    <br />

                    <p> {whyUsdescription2}</p>
                  </div>
                </div>
                <div class="img">
                  <img src={image2} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
