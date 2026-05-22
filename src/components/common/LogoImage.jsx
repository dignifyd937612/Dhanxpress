import Image from "next/image";
import logo from "../../../public/images/resources/brand-1-1.png";
const LogoImage = () => {
  return (
    <>
      <div className="swiper-slide">
        <Image src={logo} alt="" />
      </div>
    </>
  );
};

export default LogoImage;
