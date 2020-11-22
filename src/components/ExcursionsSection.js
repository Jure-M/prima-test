import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import imgKrka from "../images/krka.jpg";
import imgWalking from "../images/walking.jpg";
import imgPlitvice from "../images/plitivice.jpg";

const content = {
  ENG: {
    excursions: "Excursions",
    krkaWaterFalls: "Krka Waterfalls",
    plitviceWateFalls: "Plitvice Waterfalls",
  },
  HRV: {
    excursions: "Izleti",
    krkaWaterFalls: "Vodopadi Krke",
    plitviceWateFalls: "Plitvička jezera",
  },
};

const ExcursionsSection = () => {
  const { language } = useContext(LanguageContext);
  const { excursions, krkaWaterFalls, plitviceWateFalls } = content[language];

  return (
    <section class="events">
      <div class="container">
        <h2 class="events-title">{excursions}</h2>
        <div class="line"></div>
        <div class="excursions-items">
          <div class="events-item">
            <div class="events-img">
              <img src={imgKrka} alt="Image" />
            </div>
            <div class="events-content">
              <a href="#" title="">
                <p class="sky-p">{excursions}</p>
                <h3 class="sky-h3">{krkaWaterFalls}</h3>
              </a>
            </div>
          </div>
          <div class="events-item">
            <div class="events-img">
              <img src={imgWalking} alt="Image" />
            </div>
            <div class="events-content">
              <a href="#" title="">
                <p class="sky-p">{excursions}</p>
                <h3 class="sky-h3">Split Walking Tour</h3>
              </a>
            </div>
          </div>
          <div class="events-item">
            <div class="events-img">
              <img src={imgPlitvice} alt="Image" />
            </div>
            <div class="events-content">
              <a href="#" title="">
                <p class="sky-p">{excursions}</p>
                <h3 class="sky-h3">{plitviceWateFalls}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
