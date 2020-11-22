import React, { useContext } from "react";
import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";

import moment from "moment";

const content = {
  ENG: {
    selectedRooms: "Selected Rooms",
    totalNights: "Total Nights",
    persons: "persons",
    price: "Price",
    total: "TOTAL",
  },
  HRV: {
    selectedRooms: "Odabrane Sobe",
    totalNights: "Ukupno Noćenja",
    persons: "osobe",
    price: "Cijena",
    wiFi: "Brzi bežični internet",
    total: "UKUPNO",
  },
};

const CheckOutCart = () => {
  const { language } = useContext(LanguageContext);
  const { selectedRooms, totalNights, persons, price, total } = content[
    language
  ];

  const {
    state: { cart, filter },
  } = useContext(RoomsContext);
  const { startAt, endAt } = filter;
  const startDate = moment(startAt).format("MMMM Do YYYY");
  const endDate = moment(endAt).format("MMMM Do YYYY");

  const calculateTotal = cart.reduce((accumlator, room) => {
    accumlator = accumlator + room.totalPrice;
    return accumlator;
  }, 0);
  console.log(moment(startAt).diff);

  return (
    <div class="reservation-room-selected-b">
      <h2 class="reservation-heading">{selectedRooms}</h2>
      <div class="reservation-date">
        <ul>
          <li>
            <span>Check-In</span>
            <span>{startDate}</span>
          </li>
          <li>
            <span>Check-Out</span>
            <span>{endDate}</span>
          </li>
          <li>
            <span>{totalNights}</span>
            <span>{moment(startDate).diff(moment(endDate), "days")}</span>
          </li>
        </ul>
      </div>

      {cart.map((item) => (
        <div class="reservation-room-seleted_item">
          <div class="reservation-room-seleted_name has-package">
            <h2>{item.name}</h2>
          </div>
          <span class="reservation-option">
            {item.totalPersons} {persons}
          </span>

          <div class="reservation-room-seleted_total-room">
            {price}:<span class="reservation-amout">{item.totalPrice} €</span>
          </div>
        </div>
      ))}
      <div class="reservation-room-seleted_total">
        <label>{total}</label>
        <span class="reservation-total">{calculateTotal} €</span>
      </div>
    </div>
  );
};

export default CheckOutCart;
