import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({
  service_img,
  service_title,
  service_desc,
  service_Icon,
}) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="service-one__card">
          <div className="service-one__image">
            <a href="service-details.html">
              <div className="post-thumbnail">
                <Image src={service_img} alt="" />
              </div>
            </a>
          </div>
          <div className="service-one__content">
            <a href="service-details.html">
              <div className="service-icon">
                <i className={service_Icon}></i>
              </div>
            </a>
            <h3>
              <Link href="service-details.html">{service_title}</Link>
            </h3>
            <p>{service_desc}</p>
            <Link
              href="#"
              className="pylon-icon-right-arrow service-one__link"
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
