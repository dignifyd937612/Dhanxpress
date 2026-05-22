import Image from "next/image";
import whychooseUsImg from "../../../public/images/resources/why-choose-1-1.png";
import shape1 from "../../../public/images/shapes/why-choose-shape-1-1.png";
import shape2 from "../../../public/images/shapes/why-choose-shape-1-2.png";
import Sectionheader from "../common/Sectionheader";
const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose">
        <Image src={shape1} className="why-choose__shape-1" alt="" />
        <Image src={shape2} className="why-choose__shape-2" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose__image">
                <p>
                  <i className="pylon-icon-investment"></i>26 years of working
                  experience
                </p>
                <Image src={whychooseUsImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose__content">
                <Sectionheader
                  title={"Our Benifits"}
                  heading={"Why Salaried Employees Choose Us"}
                  textalign="left"
                />
                <p>
                  Provide your best loan services and our experience staff help
                  you. Less document and fast approve process of passages. Also
                  we are providing credit card facility to per day interest
                  credit card lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right"></i>Professional Team
                      </h3>
                      <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right"></i>Quick Payments
                      </h3>
                      <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                    </div>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Loan Process</h3>
                    <span>90%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "90%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Consultancy</h3>
                    <span>80%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "80%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Payment Benefits</h3>
                    <span>85%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "85%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
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

export default WhyChooseUs;
