import React, { useState, useContext } from "react";
import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";

import { Link } from "react-router-dom";

import {
  FaBed,
  FaCoffee,
  FaWifi,
  FaCarAlt,
  FaHome,
  FaBuilding,
} from "react-icons/fa";

const content = {
  ENG: {
    freeCoffe: "Free Coffe",
    upperFloor: "Upper Floor",
    viewMore: "View More Infomation",
    priceFor: "Price for",
    persons: "persons",
    total: "Total",
    select: "SELECT",
    roomsAvailable: "rooms available",
    notAvailable: "Not available for selected dates",
    selectOther: "Select other dates to book this room",
    startsFrom: "Starts from",
    perNight: "per night",
    selectDates: "Select reservation dates to check price",
  },
  HRV: {
    freeCoffe: "Besplatna Kava",
    upperFloor: "Gornji Kat",
    viewMore: "Pogledaj Više",
    priceFor: "Cijena za",
    persons: "osobe",
    total: "Ukupno",
    select: "DODAJ",
    roomsAvailable: "soba raspoloživo",
    notAvailable: "Nije raspoloživo za odabrane datume",
    selectOther: "Izaberite druge datume da bi rezervirali ovu sobu",
    startsFrom: "Cijena od",
    perNight: "po noćenju",
    selectDates: "Odaberite datume boravka da bi provjerili cijenu",
  },
};

const RoomBookSingle = ({ room }) => {
  const { language } = useContext(LanguageContext);
  const {
    freeCoffe,
    upperFloor,
    viewMore,
    priceFor,
    persons,
    total,
    select,
    roomsAvailable,
    notAvailable,
    selectOther,
    startsFrom,
    perNight,
    selectDates,
  } = content[language];

  const {
    state: { filter },
    addRoomToChart,
  } = useContext(RoomsContext);

  const [occupancy, setOccupancy] = useState("priceForTwo");

  const handleOccupancyChange = (e) => {
    setOccupancy(e.target.value);
  };

  const handleClick = () => {
    let persons = 2;
    if (occupancy === "priceForThree") {
      persons = 3;
    } else if (occupancy === "priceForFour") {
      persons = 4;
    }
    addRoomToChart({
      id: room.id,
      name: room.name,
      totalPersons: persons,
      totalPrice: Math.round(room.totalPrice[occupancy]),
    });
  };

  return (
    <div class="reservation-room_item">
      <h2 class="reservation-room_name">
        <Link to={`/rooms/${room.id}`}>{room.name}</Link>
      </h2>
      <div class="reservation-room_flex-container">
        <div class="reservation-room_img">
          <a href="#">
            <img src={room.thumb_rooms} alt="#" />
          </a>
        </div>

        <div class="reservation-room_text">
          <div class="reservation-room_desc">
            <ul>
              <li>
                <FaBed /> {room.beds}
              </li>
              <li>
                <FaHome /> {room.size} sqm
              </li>
              <li>
                <FaCoffee /> {freeCoffe}
              </li>
            </ul>
            <ul>
              <li>
                <FaBuilding /> {upperFloor}
              </li>
              <li>
                <FaWifi /> Wi-fi
              </li>
              <li>
                <FaCarAlt />
                Parking
              </li>
            </ul>
          </div>
          <Link to={`/rooms/${room.id}`} class="reservation-room_view-more">
            {viewMore}
          </Link>
          {filter.startAt && filter.endAt ? (
            // case: filter + available true
            room.available ? (
              <div>
                <p class="reservation-room_available">
                  {priceFor}{" "}
                  <select value={occupancy} onChange={handleOccupancyChange}>
                    <option value="priceForTwo">2</option>
                    {room.occupancy > 2 ? (
                      <option value="priceForThree">3</option>
                    ) : null}
                    {room.occupancy > 3 ? (
                      <option value="priceForFour">4</option>
                    ) : null}
                  </select>
                  {persons}
                </p>
                <div class="reservation-room_price-details">
                  <p class="reservation-room_price">
                    {total}: {Math.round(room.totalPrice[occupancy])} €
                  </p>
                  <button
                    onClick={handleClick}
                    disabled={room.quantity > 0 ? false : true}
                    class="btn  btn-room"
                  >
                    {select}
                  </button>
                </div>
                <p class="reservation-room_available">
                  {room.quantity} {roomsAvailable}
                </p>
              </div>
            ) : (
              <div>
                <div class="reservation-room_price-details">
                  <p class="reservation-room_price">{notAvailable}</p>
                </div>
                <p class="reservation-room_available">{selectOther}</p>
              </div>
            )
          ) : (
            ///case: nema filtera
            <div>
              <div class="reservation-room_price-details">
                <p class="reservation-room_price">
                  {startsFrom} {Math.round(room.basePrice)} € {perNight}
                </p>
              </div>
              <p class="reservation-room_available">{selectDates}</p>
            </div>
            ///case: nema filtera
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomBookSingle;
