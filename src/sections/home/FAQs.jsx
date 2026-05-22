import Image from "next/image";
import faq_img from "../../../public/images/resources/faq-box-1-1.png";
import Sectionheader from "@/components/common/Sectionheader";

const FAQs = () => {
  return (
    <>
      <section className="faq-one faq-one__faq-page">
        <div className="container">
          <Sectionheader
            title={"Frequently Asked Questions"}
            heading={"Got Questions? We Have Answers"}
            textalign="left"
          />
          <div className="row">
            <div className="col-lg-8">
              <ul id="accordion" className="list-unstyled">
                <li className="active">
                  <h2 className="para-title active" data-target="#collapseOne">
                    <span>
                      What documents are required for a personal loan?
                    </span>

                    <i className="fa fa-minus"></i>
                  </h2>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    style={{ display: "block" }}
                  >
                    <p>
                      You generally need PAN card, Aadhaar card, bank
                      statements, salary slips and address proof to apply for a
                      personal loan.
                    </p>
                  </div>
                </li>

                <li>
                  <h2 className="para-title" data-target="#collapseTwo">
                    <span>How long does loan approval take?</span>

                    <i className="fa fa-plus"></i>
                  </h2>

                  <div
                    id="collapseTwo"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <p>
                      Loan approval usually takes a few minutes to a few hours
                      depending on eligibility and document verification.
                    </p>
                  </div>
                </li>

                <li>
                  <h2 className="para-title" data-target="#collapseThree">
                    <span>Can I apply without a salary slip?</span>

                    <i className="fa fa-plus"></i>
                  </h2>

                  <div
                    id="collapseThree"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <p>
                      Yes, self-employed users can apply using income proof, ITR
                      documents and bank statements.
                    </p>
                  </div>
                </li>

                <li>
                  <h2 className="para-title" data-target="#collapseFour">
                    <span>What is the minimum CIBIL score required?</span>

                    <i className="fa fa-plus"></i>
                  </h2>

                  <div
                    id="collapseFour"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <p>
                      A CIBIL score above 700 is usually preferred for faster
                      approval and better interest rates.
                    </p>
                  </div>
                </li>

                <li>
                  <h2 className="para-title" data-target="#collapseFive">
                    <span>Can I repay my loan early?</span>

                    <i className="fa fa-plus"></i>
                  </h2>

                  <div
                    id="collapseFive"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <p>
                      Yes, you can prepay or foreclose your loan before the
                      tenure ends. Charges may apply depending on lender
                      policies.
                    </p>
                  </div>
                </li>

                <li>
                  <h2 className="para-title" data-target="#collapseSix">
                    <span>Does checking CIBIL score affect my credit?</span>

                    <i className="fa fa-plus"></i>
                  </h2>

                  <div
                    id="collapseSix"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <p>
                      No, checking your own CIBIL score is considered a soft
                      inquiry and does not impact your credit score.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="faq-one__box">
                <Image src={faq_img} className="img-fluid" alt="" />

                <div className="main-header__info">
                  <div className="main-header__info-phone">
                    <i className="pylon-icon-tech-support"></i>

                    <div className="main-header__info-phone-content">
                      <span>Call Anytime</span>

                      <h3>
                        <a href="tel:+1981230000">(+1) 98123 0000</a>
                      </h3>
                    </div>
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

export default FAQs;
