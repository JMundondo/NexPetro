import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

function Solution3() {
  const slider = useMemo(() => {
    return {
      loop: true,
      slidesPerView: "auto",
      roundLengths: true,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".nextbtn1",
        prevEl: ".prevbtn1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="home3-solution-section sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2 class="text-success">Our Products</h2>
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
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn1">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn1">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              loop={true}
              {...slider}
              className="swiper home3-solution-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="solution-card">
                    <div className="icon">
                      <div className="col-12">
                        <img
                          className="img-fluid img-lg"
                          src="assets/img/home-3/home3-banner-img.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="solution-content">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a class="text-success">BITUMEN</a>
                        </Link>
                      </h4>
                      <p>
                        Bitumen 40/50 , Bitumen 40/60 , Bitumen 50/70 , Bitumen
                        60/70 , Bitumen 60/90 , Bitumen 70/100 , Bitumen 80/100
                        , Bitumen 85/100 , Bitumen 90/10 , Bitumen VG30 ,
                        Bitumen VG40
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="solution-card">
                    <div className="icon">
                      <div className="col-12">
                        <img
                          className="img-fluid img-lg"
                          src="assets/img/home-3/fertilizer.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="solution-content">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a class="text-success">FERTILIZER</a>
                        </Link>
                      </h4>
                      <p>Urea 46% Granular Urea Pilled Urea Solfur .</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="solution-card">
                    <div className="icon">
                      <div className="col-12">
                        <img
                          className="img-fluid img-lg"
                          src="assets/img/home-3/base_oil.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="solution-content">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a class="text-success">BASE OIL</a>
                        </Link>
                      </h4>
                      <p>VIRGIN & RECYCLE, SN 70 , SN 150 , SN 350 , SN 500</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="solution-card">
                    <div className="icon">
                      <div className="col-12">
                        <img
                          className="img-fluid img-lg"
                          src="assets/img/home-3/fuel.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="solution-content">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a class="text-success">FUEL OIL </a>
                        </Link>
                      </h4>
                      <p>GASS OIL EN 590 D2</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution3;
