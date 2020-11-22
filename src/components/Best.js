import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import aboutImg1 from "../images/Home-1/icon_1.png";
import aboutImg2 from "../images/Home-1/icon_2.png";
import aboutImg3 from "../images/Home-1/icon_3.png";
import aboutImg4 from "../images/Home-1/icon_4.png";
import aboutImg5 from "../images/Home-1/icon_5.png";
import aboutImg6 from "../images/Home-1/icon_6.png";

const content = {
  ENG: {
    beds: "beds",
    centralLocation: "Central Location",
    excursions: "Excursions & Daytrips",
    wiFi: "High speed WI-FI",
    cleaning: "CLEANING eVERDAY",
    transfers: "airport transfers",
  },
  HRV: {
    beds: "kreveti",
    centralLocation: "U centru",
    excursions: "Izleti",
    wiFi: "Brzi bežični internet",
    cleaning: "Svakodnevno čišćenje",
    transfers: "usluge prijevoza",
  },
};

const Best = () => {
  const { language } = useContext(LanguageContext);
  const {
    beds,
    centralLocation,
    excursions,
    wiFi,
    cleaning,
    transfers,
  } = content[language];
  return (
    <section class="best">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg1} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">King size {beds}</h6>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg6} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">{centralLocation}</h6>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg2} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">{excursions}</h6>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg3} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">{wiFi}</h6>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg4} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">{cleaning}</h6>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="wrap-best">
              <div class="icon-best">
                <img src={aboutImg5} class="img-responsive" alt="Image" />
              </div>
              <h6 class="sky-h6">{transfers}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
