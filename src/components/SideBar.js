import React, { useState, useContext } from "react";
import moment from "moment";
import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SideBarCart from "./SidebarCart";

import { FaCalendarAlt } from "react-icons/fa";

const content = {
  ENG: {
    checkAvailable: "Check avalable rooms",
    stayDates: "Enter your stay dates",
    arrive: "Arrive",
    departure: "Departure",
    checkBtn: "CHECK AVAILABLE",
  },
  HRV: {
    checkAvailable: "Provjer Raspoloživost",
    stayDates: "Unesite Datume boravka",
    arrive: "Dolazak",
    departure: "Odlazak",
    checkBtn: "PROVJERI",
  },
};

const SideBar = () => {
  const { language } = useContext(LanguageContext);
  const { checkAvailable, stayDates, arrive, departure, checkBtn } = content[
    language
  ];

  const {
    state: { filter, errors },
    setSearchDates,
  } = useContext(RoomsContext);

  const [startDate, setStartDate] = useState(filter.startAt);
  const [endDate, setEndDate] = useState(filter.endAt);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!startDate && !endDate) {
      setError({ type: "error", message: "Please fill all fields" });
    } else if (endDate <= startDate) {
      setError({
        type: "datepicker",
        message: "Check out must be after Check in",
      });
    } else {
      setSearchDates(startDate, endDate);
    }
  };

  return (
    <div class="sidebar">
      {/*        selected rooms        */}
      <SideBarCart />
      {/*        selected rooms    end    */}
      {/*        search rooms        */}
      <div class="widget widget_check_availability">
        <h4 class="widget-title">{checkAvailable}</h4>
        <div class="check_availability">
          <h6 class="check_availability_title">{stayDates}</h6>
          <div class="check_availability-field">
            <label>{arrive}</label>
            <div class="input-group date">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                placeholderText="check-in.."
              />
              {/*  <input
                class="form-control wrap-box"
                type="text"
                placeholder="Arrival Date"
              />*/}
              <span class="input-group-addon">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
          <div class="check_availability-field">
            <label>{departure}</label>
            <div class="input-group date">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="check-out.."
              />
              <span class="input-group-addon">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
          {error ? (
            <div class="error">
              <p>{error.message}</p>
            </div>
          ) : null}
          <button onClick={handleSubmit} class="btn-room btn">
            {checkBtn}
          </button>
        </div>
      </div>
      {/*        search rooms   end      */}
    </div>
  );
};

export default SideBar;
