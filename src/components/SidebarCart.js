import React, { useContext } from "react";
import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";

import { Link } from "react-router-dom";

const content = {
  ENG: {
    selectedRooms: "Selected Rooms",
    remove: "remove",
    persons: "persons",
    total: "TOTAL",
    reserve: "RESERVE",
    noRoomsSelected: "You dont have any selected rooms",
  },
  HRV: {
    selectedRooms: "Odabrane Sobe",
    remove: "ukloni",
    persons: "osobe",
    total: "UKUPNO",
    reserve: "REZERVIRAJ",
    noRoomsSelected: "Nemate odabranih soba",
  },
};

const SidebarCart = () => {
  const { language } = useContext(LanguageContext);
  const {
    selectedRooms,
    remove,
    persons,
    total,
    reserve,
    noRoomsSelected,
  } = content[language];

  const {
    state: { cart },
    removeRoomFromCart,
  } = useContext(RoomsContext);

  const calculateTotal = cart.reduce((accumlator, room) => {
    accumlator = accumlator + room.totalPrice;
    return accumlator;
  }, 0);

  return (
    <div class="reservation-room-selected-a">
      <h2 class="reservation-heading">{selectedRooms}</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div class="content-room">
              <div class="room">
                <p>
                  {item.cartQuantity} x {item.name}
                </p>
                <button
                  onClick={() => removeRoomFromCart(item)}
                  class="btn btn-remove"
                >
                  {remove}
                </button>
              </div>
              <div class="room1">
                <span>{item.totalPrice} €</span>
              </div>
              <p>
                {item.totalPersons} {persons}
              </p>
            </div>
          ))}
          <div class="total">
            {total} <span>{calculateTotal} €</span>
          </div>
          <Link to="/check-out">
            <button class="btn-room btn">{reserve}</button>
          </Link>
        </>
      ) : (
        <div class="content-room">
          <div class="reservation-room-seleted_current bg-blue">
            <h6>{noRoomsSelected}</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarCart;
