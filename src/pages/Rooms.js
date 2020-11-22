import React from "react";

import Banner from "../components/layout/Banner";
import SideBar from "../components/SideBar";
import RoomBook from "../components/RoomBook";

const Rooms = () => {
  return (
    <>
      <Banner title={"Our rooms"} />
      <section class="section-reservation-page">
        <div class="container">
          <div class="reservation-page">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                {/* SIDEBAR BEGINING */}
                <SideBar />
                {/* SIDEBAR END */}
              </div>
              <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <div class="reservation_content">
                  <RoomBook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
