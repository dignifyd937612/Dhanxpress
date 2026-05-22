import Sectionheader from "@/components/common/Sectionheader";
import ServiceCard from "@/components/home/ServiceCard";
import { services } from "@/data/common/services";

const LoanServices = () => {
  return (
    <>
      <section className="service-one">
        <div className="container">
          <Sectionheader
            title={"What We’re Offering"}
            heading={"Smart Loan Solutions for Working Professionals"}
          />
          <div className="row">
            {services.map(({ id, image, title, description, icon }) => (
              <ServiceCard
                key={id}
                service_img={image}
                service_title={title}
                service_desc={description}
                service_Icon={icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default LoanServices;
