import Link from "next/link";

const LoanCalculator = () => {
  return (
    <>
      <section className="contact-two">
        <div className="container">
          <div className="row">

            <div className="col-md-7">
              <div className="loan-slider-box">
                <div className="loan-main-heading block-title text-left">
                  <p className="small-title mb-0">Monthly EMI</p>

                  <h3 className="title-block w-500">
                    Loan Interest Calculator
                  </h3>
                </div>


                <div className="single-loan-slider">
                  <h4>Loan Amount</h4>

                  <div id="calculator-pricipal-slide"></div>

                  <div className="single-loan-counter">
                    <span>₹</span>

                    <h6 id="calculator-pricipal">100000</h6>
                  </div>
                </div>


                <div className="single-loan-slider">
                  <h4>Loan Months</h4>

                  <div id="calculator-totalyear-slide"></div>

                  <div className="single-loan-counter">
                    <h6 id="calculator-totalyear">120</h6>

                    <span>Months</span>
                  </div>
                </div>


                <div className="single-loan-slider">
                  <h4>Interest Rate</h4>

                  <div id="calculator-intrest-slide"></div>

                  <div className="single-loan-counter">
                    <h6 id="calculator-intrest">10</h6>

                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-5">
              <div
                id="loan-calculator-1"
                data-interest-rate="15"
                className="about-one__form"
              >
                <h3>How Much You Need</h3>

                <div className="about-one__form-content about-total-loan-form">
                  <div className="about-total-loan-form-calculation">
                    {/* EMI */}

                    <p>
                      <span>Monthly EMI</span>

                      <b>
                        ₹ <i id="calculator-emi">1,309.91</i>
                      </b>
                    </p>

                    {/* INTEREST */}

                    <p>
                      <span>Total Interest</span>

                      <b>
                        ₹ <i id="calculator-tbl-emi">57,188.72</i>
                      </b>
                    </p>

                    {/* TOTAL */}

                    <p>
                      <span>Total Amount Payable</span>

                      <b>
                        ₹ <i id="calculator-tbl-la">157,188.72</i>
                      </b>
                    </p>
                  </div>

                  <Link
                    href="/applyform"
                    className="thm-btn"
                    target="_blank"
                    rel="nofollow"
                  >
                    Apply For Loan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanCalculator;
