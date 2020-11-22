import React, { useContext } from "react";

import { RoomsContext } from "../contexts/RoomsContext";
import { Spinner } from "react-bootstrap";

import RoomBookSingle from "./RoomBookSingle";

const RoomBook = () => {
  const {
    state: { rooms, loading },
  } = useContext(RoomsContext);
  console.log(loading);
  return (
    <div class="reservation-room">
      {!loading ? (
        rooms.map((room) => <RoomBookSingle room={room} />)
      ) : (
        <div class="spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default RoomBook;
