import Link from "next/link";
import banner_img1 from "../../../public/images/main-slider/main-slider-1-1.jpg";
import banner_img2 from "../../../public/images/main-slider/main-slider-1-2.jpg";

const Banner = () => {
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <section className="main-slider">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1,"loop": true,"effect": "fade","autoplay": {"delay": 5000},"navigation": {"nextEl": "#main-slider__swiper-button-next","prevEl": "#main-slider__swiper-button-prev"}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${banner_img1.src})`,
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple & Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>
                    <Link href="/applyform" className="thm-btn">
                      Apply For Loan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${banner_img2.src})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple & Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>
                    <a href="apply-now.html" className="thm-btn">
                      Apply For Loan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${banner_img1.src})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple & Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>
                    <a href="apply-now.html" className="thm-btn">
                      Apply For Loan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="pylon-icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="pylon-icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div className="feature-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="feature-two__box">
                      <i className="pylon-icon-consumer-behavior"></i>
                      <p>Quick Payment Process</p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="feature-two__box">
                      <i className="pylon-icon-point-of-sale"></i>
                      <p>No Prepayment Fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
