import { useRouter } from "next/router";
import React from "react";

function About3() {
  const currentRoute = useRouter().pathname;
  return (
    <div
      className={`home3-about-section ${
        currentRoute === "/about" ? "sec-mar" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div
              className="section-title-3 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>Our Approach</h2>
              <p>
                Welcome to NexPetro Private Limited, a reputable brand ushering
                Petroleum and Bituminous products, Industrial and Agricultural
                Chemicals in the Zimbabwean market and beyond. Our dedication is
                to offer top class in our wide range of products and services
                focused at forming lasting partnerships with our valued client
                base. We have a strong backing of expertise in various lines of
                professions which is an enabler on our part to read, understand
                and respond most accordingly to the market trends and demands in
                catering fully and effectively for our customers’ diverse needs.
              </p>
            </div>
            <div className="about-left">
              <div
                className="about-img  wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/home3-about-1.png"
                  alt=""
                />
              </div>
              <div
                className="about-content wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>Unlock the potential of your business.</h2>
                <p>
                  We believe in delivering tailored solutions that are designed
                  to address your unique requirements. We take the time to
                  understand your business and provide personalized services
                  that align with your goals.
                </p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>Customized Solutions</h5>
                    <p>Services are professional w offerings provided.</p>
                  </li>
                  <li>
                    <h5>Quality Reliability</h5>
                    <p>Services are professional w offerings provided.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/home3-about-2.png"
                  alt=""
                />
              </div>
              <div
                className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="exp-text">
                  <img src="assets/img/home-3/rotate-text.png" alt="" />
                </div>
                <div className="excellent">
                  <h2>
                    5<br />
                    <span>excellent</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
