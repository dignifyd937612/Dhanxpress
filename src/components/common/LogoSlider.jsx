import LogoImage from "./LogoImage";

const LogoSlider = () => {
  return (
    <>
      <div className="client-carousel pt-90 pb-90 client-carousel__has-border-top">
        <div className="container">
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {"0": {"spaceBetween": 30,"slidesPerView": 2},"375": {"spaceBetween": 30,"slidesPerView": 2},"575": {"spaceBetween": 30,"slidesPerView": 3},"767": {"spaceBetween": 50,"slidesPerView": 4},"991": {"spaceBetween": 50,"slidesPerView": 5},"1199": {"spaceBetween": 100,"slidesPerView": 5}}}'
          >
            <div className="swiper-wrapper">
              {[...Array(5)].map((_, index) => (
                <LogoImage key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
