import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import aboutImg1 from "../images/about_1.jpg";
import aboutImg2 from "../images/about_2.jpg";

const content = {
  ENG: {
    aboutUs: "About Us",
    description1: `Being centrally located and just a few steps away from all the restaurants, bars and main tourist sites
    in the city but also equipped with elegant and quiet rooms, Prima Life Spalato hotel offers a perfect
    base for exploring the city.`,
    description2: `Ten elegant and modern rooms equipped with all needed for a perfect
    holiday, personal attention and intimate atmosphere will exceed your expectations and provide
    comfortable stay for all of our guests. We will be happy to accommodate you and make your stay in
    Split memorable`,
    readMore: "Read More",
  },
  HRV: {
    aboutUs: "O nama",
    description1: `
        S obzirom na lokaciju  u samom središtu grada i na samo nekoliko koraka od svih restorana, barova i glavnih turističkih mjesta
        u gradu, ali i opremljen elegantnim i tihim sobama Prima Life Spalato nudi savršenu
        bazz za istraživanje grada i oklice`,
    description2: `Deset elegantnih i modernih soba opremljenih sa svim potrebnim sadržajem za savršen
    odmor, osobna pažnja i intimna atmosfera nadmašit će vaša očekivanja i pružiti 
    ugodan boravak svim našim gostima...`,
    readMore: "Pročitaj Više",
  },
};

const AboutUsSection = () => {
  const { language } = useContext(LanguageContext);
  const { aboutUs, description1, description2, readMore } = content[language];

  return (
    <section class="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-centent">
            <h2 class="about-title">{aboutUs}</h2>
            <div class="line"></div>
            <p class="about-p">{description1}</p>
            <p class="about-p1">{description2}</p>
            <a href="#" class="read-more">
              {readMore}
            </a>
          </div>
          <div class="about-img">
            <div class="img-1">
              <img src={aboutImg2} class="img-about" alt="Image" />
            </div>
            <div class="img-2">
              <img src={aboutImg1} class="img-about" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
