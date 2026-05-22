import Image from "next/image";
import trustedImg from "../../../public/images/resources/trust-1-1.png";
import bgImage from "../../../public/images/shapes/trust-bg-1-1.png";
const TrustedCompany = () => {
  return (
    <>
      <section className="trusted-company">
        <div
          className="trusted-company__bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="trusted-company__content">
                <div className="block-title text-left">
                  <p>Trusted Company</p>
                  <h2>Trusted by Salaried Professionals Across India</h2>
                </div>
                <div className="trusted-company__image">
                  <Image src={trustedImg} alt="" height="148" width="171" />
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-5 col-xs-12">
                    <ul className="trusted-company__list">
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Credit Card Per Day
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Secure Online Verification
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Flexible Repayment Options
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Personal Loan
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <ul className="trusted-company__list trusted-company__list-2">
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Instant Salary Loans
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Low EMI Plans
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Quick Approval Process
                        </span>
                      </li>
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        <span className="trusted-company__list-text">
                          Minimal Documentation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trusted-company__box-wrap">
                <div className="trusted-company__box">
                  <span>1</span>
                  <p>
                    Enter your salary and basic details to check eligibility
                    instantly.
                  </p>
                </div>
                <div className="trusted-company__box">
                  <span>2</span>
                  <p>Submit PAN, Aadhaar, and salary slips securely online.</p>
                </div>
                <div className="trusted-company__box">
                  <span>3</span>
                  <p>Receive quick approval with flexible EMI options.</p>
                </div>
                <div className="trusted-company__box">
                  <span>4</span>
                  <p>Loan amount transferred directly to your bank account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustedCompany;
