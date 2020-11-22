import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { RoomsContext } from "../contexts/RoomsContext";
import { LanguageContext } from "../contexts/LanguageContext";

import outlineIcon from "../images/icons/icon-our.png";

const content = {
  ENG: {
    ourRooms: "Our Rooms",
    description: "Ten modern and beautifully decorated rooms for pure pleasure",
    from: "from",
    perNight: "Per Night",
  },
  HRV: {
    ourRooms: "Naše Sobe",
    description: "Deset modernih i lijepo uređenih soba za čisti užitak",
    from: "od",
    perNight: "po noćenju",
  },
};

const OurRooms = () => {
  const {
    state: { rooms },
  } = useContext(RoomsContext);

  const { language } = useContext(LanguageContext);
  const { ourRooms, description, from, perNight } = content[language];

  return (
    <section class="rooms">
      <div class="container">
        <h2 class="title-room">{ourRooms}</h2>
        <div
          style={{ background: `url(${outlineIcon}) no-repeat center` }}
          class="outline"
        ></div>
        <p class="rooms-p">{description}</p>
        <div class="wrap-rooms">
          {rooms.map((room) => (
            <div class="wrap-box">
              <div class="box-img">
                <img
                  class="wrap-box-img"
                  src={room.thumb_main}
                  alt="PLuxury Room"
                  title="Luxury Room"
                />
              </div>
              <div class="rooms-content">
                <Link to={`rooms/${room.id}`}>
                  <h4 class="sky-h4">{room.name}</h4>
                  <p class="price">
                    {from} {room.basePrice} €/ {perNight}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRooms;
