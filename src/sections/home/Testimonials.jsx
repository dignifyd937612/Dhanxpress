import TestimonialCard from "@/components/home/TestimonialCard";
import { testimonials } from "@/data/home/Testimonials";
import dummyImage from "../../../public/images/resources/testimonials-1-1.png";
import Image from "next/image";
import Sectionheader from "@/components/common/Sectionheader";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-one">
        <div className="container">
          <Sectionheader
            title={"Customers Testimonials"}
            heading={"Customers Testimonials"}
          />
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options='{"spaceBetween": 0,"slidesPerView": 1,"slidesPerGroup": 1,"loop":true,"autoplay": {"delay": 5000},"pagination": {"el": ".testimonials-one__swiper-pagination","type": "bullets","clickable": true},"breakpoints": {"0": {"spaceBetween": 0,"slidesPerView": 1,"slidesPerGroup": 1},"375": {"spaceBetween": 0,"slidesPerView": 1,"slidesPerGroup": 1},"667": {"spaceBetween": 30,"slidesPerView": 1,"slidesPerGroup": 1},"767": {"spaceBetween": 30,"slidesPerView": 1,"slidesPerGroup": 1},"991": {"spaceBetween": 30,"slidesPerView": 2,"slidesPerGroup": 2},"1199": {"spaceBetween": 30,"slidesPerView": 3,"slidesPerGroup": 3}}}'
          >
            <div className="swiper-wrapper">
              {Array.from({ length: 10 }).map((_, index) => (
                <TestimonialCard key={index} />
              ))}
            </div>

            <div className="testimonials-one__swiper-pagination swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
