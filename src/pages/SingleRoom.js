import React, { useContext, useState } from "react";
import ImageGallery from "react-image-gallery";

import { LanguageContext } from "../contexts/LanguageContext";
import { RoomsContext } from "../contexts/RoomsContext";
import { Spinner } from "react-bootstrap";

import Banner from "../components/layout/Banner";
import SideBar from "../components/SideBar";

const content = {
  ENG: {
    max: "Max",
    size: "Size",
    view: "View",
    workDesk: "Work Desk",
    hairDryer: "Hairdryer",
    bathroom: "Private Bathroom",
    coffeAndTea: "Coffe & Tea",
    bedLinen: "Bed Linen & Towels",

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
    max: "Kapacitet",
    size: "Kvadratura",
    view: "Pogled",
    workDesk: "Radni Stol",
    hairDryer: "Sušilo za kosu",
    bathroom: "Privatna Kupaonica",
    coffeAndTea: "Kava & Čaj",
    bedLinen: "Posteljina & Ručnici",

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

const SingleRoom = ({ match }) => {
  const { id } = match.params;

  const { language } = useContext(LanguageContext);
  const {
    max,
    size,
    view,
    workDesk,
    hairDryer,
    bathroom,
    coffeAndTea,
    bedLinen,
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
    state: { filter, rooms, loading },
    addRoomToChart,
  } = useContext(RoomsContext);

  const [occupancy, setOccupancy] = useState("priceForTwo");

  const handleOccupancyChange = (e) => {
    setOccupancy(e.target.value);
  };

  const room = rooms.find((element) => element.id === parseInt(id));

  const images = room.imgUrlGallery;

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
    <>
      <Banner title={room.name} />
      <section class="section-reservation-page">
        <div class="container">
          <div class="reservation-page">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <SideBar />
              </div>
              <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                {!loading ? (
                  <div class="reservation_content">
                    <ImageGallery showPlayButton={false} items={images} />
                    <div class="single-room_details">
                      <h5 class="single-room_title">{room.name}</h5>
                      <p>{room.description[language]}</p>
                      <div class="row">
                        <div class="col-xs-6 col-md-4">
                          <ul>
                            <li>
                              {max}: {room.occupancy} {persons}
                            </li>
                            <li>
                              {size}: {room.size} sqm{" "}
                            </li>
                            <li>
                              {view}: {room.view}
                            </li>
                          </ul>
                        </div>
                        <div class="col-xs-6 col-md-4">
                          <ul>
                            <li>{workDesk}</li>
                            <li>{hairDryer}</li>
                            <li>{bathroom}</li>
                          </ul>
                        </div>
                        <div class="col-xs-6 col-md-4">
                          <ul>
                            <li>Wi-fi</li>
                            <li>{bedLinen}</li>
                            <li>{coffeAndTea}</li>
                          </ul>
                        </div>
                      </div>
                      {filter.startAt && filter.endAt ? (
                        room.available ? (
                          <div class="single-room_booking-details">
                            <p class="single-room_available">
                              {priceFor}{" "}
                              <select
                                value={occupancy}
                                onChange={handleOccupancyChange}
                              >
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
                            <div class="single-room_price">
                              <h5 class="single-room_price-title">
                                {total}:{" "}
                                {Math.round(room.totalPrice[occupancy])} €
                              </h5>
                              <button
                                onClick={handleClick}
                                disabled={room.quantity > 0 ? false : true}
                                type="button"
                                class="btn-single-room"
                              >
                                {" "}
                                {select}
                              </button>
                            </div>
                            <p class="single-room_available">
                              {room.quantity} {roomsAvailable}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div class="single-room_booking-details">
                              <div class="single-room_price">
                                <h5 class="single-room_price-title">
                                  {notAvailable}
                                </h5>
                              </div>
                              <p class="reservation-room_available">
                                {selectOther}
                              </p>
                            </div>
                          </div>
                        )
                      ) : (
                        <div>
                          <div class="single-room_booking-details">
                            <div class="single-room_price">
                              <h5 class="single-room_price-title">
                                {startsFrom}{" "}
                                {room ? Math.round(room.basePrice) : "49"} €{" "}
                                {perNight}
                              </h5>
                            </div>
                            <p class="reservation-room_available">
                              {selectDates}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div class="spinner">
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRoom;
