import Image from "next/image";
import shape1 from "../../../public/images/shapes/feature-shape-1-1.png";
import shape2 from "../../../public/images/shapes/feature-shape-1-2.png";
import shape3 from "../../../public/images/shapes/feature-shape-1-3.png";
import FeatureCard from "@/components/home/FeatureCard";
import { features } from "@/data/home/Features";
import Sectionheader from "@/components/common/Sectionheader";
const KnowAboutBusiness = () => {
  return (
    <>
      <section className="feature-one">
        <Image src={shape1} alt="" className="feature-one__shape-1" />
        <Image src={shape2} alt="" className="feature-one__shape-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Sectionheader
                title={"Get to Know About"}
                heading={"Fast & Secure Loans Based on Your Monthly Income"}
                textalign="left"
              />
            </div>
            <div className="col-lg-6">
              <p className="block-text">
                Get instant loan approvals designed specially for salaried
                employees. Enjoy low interest rates, minimal documentation, and
                flexible repayment options with a completely secure online
                process.
              </p>
            </div>
          </div>
          <div className="row">
            {features.map((item, index) => (
              <FeatureCard key={index} icon={item?.icon} text={item?.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowAboutBusiness;
