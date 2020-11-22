import React, { useState, useContext } from "react";
import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";
import backgroundImage from "../images/Slider-v2.jpg";
import calendarIcon from "../images/icons/date-icon.png";
import { useHistory } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

const content = {
  ENG: {
    arrivalDate: "Arrival Date",
    departureDate: "Departure Date",
    check: "check",
    availability: "availability",
    errorMessage: {
      error1: "Please fill all fields",
      error2: "Check out must be after Check in",
    },
  },
  HRV: {
    arrivalDate: "Datum Dolaska",
    departureDate: "Datum Odlaska",
    check: "provjeri",
    availability: "raspoloživost",
    errorMessage: {
      error1: "Molimo ispunite sva polja",
      error2: "Datum odlaska mora biti iza datuma dolaska",
    },
  },
};
const HeroLanding = (props) => {
  const {
    state: { filter },
    setSearchDates,
  } = useContext(RoomsContext);

  const { language } = useContext(LanguageContext);
  const {
    arrivalDate,
    departureDate,
    check,
    availability,
    errorMessage,
  } = content[language];

  const [startDate, setStartDate] = useState(filter.startAt);
  const [endDate, setEndDate] = useState(filter.endAt);
  const [error, setError] = useState(null);

  let history = useHistory();

  const handleSubmit = () => {
    if (!startDate && !endDate) {
      setError({ type: "error", message: errorMessage.error1 });
      setTimeout(() => {
        setError(null);
      }, 4000);
    } else if (endDate <= startDate) {
      setError({
        type: "datepicker",
        message: errorMessage.error2,
      });
      setTimeout(() => {
        setError(null);
      }, 4000);
    } else {
      setSearchDates(startDate, endDate);
      history.push("/rooms");
    }
  };

  return (
    <section
      style={{
        background: `url(${backgroundImage}) no-repeat  center  / cover`,
      }}
      class="section-hero height-v"
    >
      <div class="check-avail">
        <div class="container">
          {error ? (
            <div class="hero-error">
              <p>{error.message}</p>
            </div>
          ) : null}
        </div>
        <div class="container">
          <div class="arrival date-title">
            <label>{arrivalDate}</label>
            <div class="input-group ">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                placeholderText="check-in"
              />
              <span class="input-group-addon">
                <img src={calendarIcon} alt="#" />
              </span>
            </div>
          </div>
          <div class="departure date-title">
            <label>{departureDate} </label>
            <div class="input-group">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="check-out"
              />
              <span class="input-group-addon">
                <img src={calendarIcon} alt="#" />
              </span>
            </div>
          </div>

          <div class="find_btn date-title">
            <div onClick={handleSubmit} class="text-find">
              {check}
              <br />
              {availability}
            </div>
          </div>
        </div>
        <div class="container"></div>
      </div>
    </section>
  );
};

export default HeroLanding;
