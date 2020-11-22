import React from "react";

import image from "../../images/banner.jpg";
import { FaBlackTie } from "react-icons/fa";

const Banner = (props) => {
  return (
    <section
      style={{
        background: `url(${image}) no-repeat`,
      }}
      class="banner-tems text-center"
    >
      <div class="container">
        <div class="banner-content">
          <h2>{props.title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
