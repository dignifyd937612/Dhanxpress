import Sectionheader from "@/components/common/Sectionheader";
import bgImg from "../../../public/images/update-08-06-2023/pattern/services-v4-pattern.jpg";
const PersonalLoan = () => {
  return (
    <>
      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-four__img">
                <div className="shape1 float-bob-y">
                  <img
                    src="images/update-08-06-2023/shapes/about-v4-shape1.png"
                    alt="#"
                  />
                </div>
                <div className="about-four__img1">
                  <img
                    src="images/update-08-06-2023/about/about-v4-img1.jpg"
                    alt="#"
                  />
                </div>
                <div
                  className="about-four__img2 wow fadeInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner">
                    <img
                      src="images/update-08-06-2023/about/about-v4-img2.jpg"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-four__content">
                <Sectionheader
                  title={"What we are Offering"}
                  heading={"Personal Loans to FulfillYour Dreams"}
                />

                <div className="about-four__content-text1">
                  <h2>
                    Stop Worrying, We take Care of your Personal Loan Problems
                  </h2>
                  <p>
                    Web designing in a powerful way of just not an only
                    professions, however, in a passion for our Company. We have
                    to a tendency to believe the idea that smart looking of any
                    website is the first impression on visitors.
                  </p>
                </div>

                <div className="about-four__content-text2">
                  <ul>
                    <li>
                      <div className="icon-box">
                        <span className="pylon-icon-assets"></span>
                      </div>

                      <div className="text-box">
                        <h3>
                          Direct Card <br />
                          Payments
                        </h3>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="pylon-icon-finance"></span>
                      </div>

                      <div className="text-box">
                        <h3>
                          Lowest Bank <br />
                          Fees
                        </h3>
                      </div>
                    </li>
                  </ul>

                  <div className="btn-box">
                    <a className="thm-btn2" href="about.html">
                      Discover More
                    </a>
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

export default PersonalLoan;
