import Image from "next/image";
import Userimage from "../../../public/images/resources/testimonials-1-1.png";
const TestimonialCard = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonials-one__box">
        <p>
          <span>
            I was very impresed by the company service lore ipsum is simply free
            text used by copy typing refreshing. Neque porro est dolorem ipsum
            quia.
          </span>
        </p>
        <h3>Clyde Williamson</h3>
        <span className="testi_sname">Analytics</span>
      </div>

      <div className="testimonials-one__box-info">
        <Image src={Userimage} alt="user_image" />
      </div>
    </div>
  );
};

export default TestimonialCard;
