import Sectionheader from "@/components/common/Sectionheader";
import Link from "next/link";

const LoanEligibility = () => {
  return (
    <>
      <section className="contact-two">
        <div className="container">
          <Sectionheader
            title={"Loan Eligibility"}
            heading={"Loan Eligibility"}
          />
          <div className="row">
            <div className="col-md-7">
              <div className="loan-slider-box eligibility-slider-box">
                <div className="single-loan-slider">
                  <h4>Loan Amount</h4>
                  <div
                    id="pricipal-slide"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min"></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "9.89989%" }}
                    ></span>
                  </div>
                  <div className="single-loan-counter">
                    <span>₹</span>
                    <h6 id="pricipal">900000</h6>
                  </div>
                </div>
                <div className="single-loan-slider">
                  <h4>Gross Income (Monthly)</h4>
                  <div
                    id="income-slide"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min"></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "2.9903%" }}
                    ></span>
                  </div>
                  <div className="single-loan-counter">
                    <span>₹</span>
                    <h6 id="income">30000</h6>
                  </div>
                </div>
                <div className="single-loan-slider">
                  <h4>Tenure (Years)</h4>
                  <div
                    id="totalyear-slide"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min"></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "29.0323%" }}
                    ></span>
                  </div>
                  <div className="single-loan-counter">
                    <h6 id="totalyear">10</h6>
                    <span>Years</span>
                  </div>
                </div>
                <div className="single-loan-slider">
                  <h4>Interest Rate</h4>
                  <div
                    id="intrest-slide"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min"></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "30.4132%" }}
                    ></span>
                  </div>
                  <div className="single-loan-counter">
                    <h6 id="intrest">7.78</h6>
                    <span>%</span>
                  </div>
                </div>
                <div className="single-loan-slider">
                  <h4>Other EMIs (Monthly)</h4>
                  <div
                    id="other-emi-slide"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min"
                      style={{ width: "0%" }}
                    ></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "0%" }}
                    ></span>
                  </div>
                  <div className="single-loan-counter">
                    <span>₹</span>
                    <h6 id="other-emi">0</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div id="loan-eligibility" className="loan-eligibility-form">
                <div className="loan-eligibility-form-content">
                  <div className="loan-eligibility-inner-heading">
                    <h4>Monthly EMI</h4>
                    <span className="loan-eligibility-inner-heading-dollor">
                      ₹
                    </span>
                    <div
                      className="loan-eligibility-total"
                      id="loan-eligibility-monthly"
                    >
                      13657
                    </div>
                  </div>
                  <div className="loan-eligibility-inner-heading eligibility-inner-heading">
                    <h4>Maximum Loan Eligibility</h4>
                    <span className="loan-eligibility-inner-heading-dollor">
                      ₹
                    </span>
                    <div
                      className="loan-eligibility-total"
                      id="loan-eligibility-maximum-total"
                    >
                      988522
                    </div>
                    <span
                      className="loan-eligibility-monthly"
                      id="loan-eligibility-maximum-emi"
                    >
                      / 15000&nbsp;EMI
                    </span>
                  </div>
                  <Link
                    href="/applyform"
                    className="thm-btn"
                    target="_blank"
                    rel="nofollow"
                  >
                    Apply For Loan
                  </Link>
                  <div className="loan-eligibility-details">
                    <small>
                      *These calculators are provided only as general self-help
                      Planning Tools. Results depend on other factors.
                    </small>
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
export default LoanEligibility;
