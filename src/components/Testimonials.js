import React from "react";

import Carousel from "react-bootstrap/Carousel";
import imgTestimonials from "../images/Home-1/Testimonials.jpg";

const Testimonials = () => {
  return (
    <section
      style={{ backgroundImage: `url(${imgTestimonials})` }}
      class="testimonials"
    >
      <div class="testimonials-h">
        <div class="testimonials-content">
          <div class="container">
            <Carousel indicators={false}>
              <Carousel.Item className="item">
                <p class="testimonials-p">
                  <span>“</span>​‌ The ladies at the reception desk were
                  exceptional.room very clean and comfortable.loved the designs
                  of the towels everyday.<span>​‌​‌”</span>
                </p>
                <h5 class="sky-h5">Evelyn</h5>
                <p class="testimonials-p1">Germany</p>
              </Carousel.Item>
              <Carousel.Item>
                <div class="item">
                  <p class="testimonials-p">
                    <span>“</span>​‌ · Comfortable bed, big rooms and clean. AC
                    worked really good. Super friendly and helpfull
                    receptionists.
                    <span>​‌​‌”</span>
                  </p>
                  <h5 class="sky-h5">Marcel</h5>
                  <p class="testimonials-p1">Switzerland</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="item">
                  <p class="testimonials-p">
                    <span>“</span>​‌ Location was exellent with good access to
                    old town in minutes. Staff is extremely helpful and
                    friendly. Good quality of money <span>​‌​‌”</span>
                  </p>
                  <h5 class="sky-h5">Petros</h5>
                  <p class="testimonials-p1">United Kingdom</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="item">
                  <p class="testimonials-p">
                    <span>“</span>​‌ · Great location close to old town and
                    water front. Staff were terrific and gave lots of
                    information and recommendations for things to do and places
                    to go in Split. Spacious room with a comfy big bed, aircon
                    and super fast wifi! Could not have asked for anything more.
                    <span>​‌​‌”</span>
                  </p>
                  <h5 class="sky-h5">Caitlin</h5>
                  <p class="testimonials-p1">United Kingdom</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
