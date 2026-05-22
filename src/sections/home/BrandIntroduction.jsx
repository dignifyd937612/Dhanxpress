import Link from "next/link";

const BrandIntroduction = () => {
  return (
    <>
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-7">
              <div className="about-one__content">
                <div className="block-title text-left">
                  <p>Company Introductions</p>
                  <h2>Get Instant Financial Support When You Need It</h2>
                </div>
                <p>
                  We help salaried employees get quick and secure loans with
                  minimal documentation, fast approval, and flexible repayment
                  options designed around monthly income.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-four__box text-left">
                    <div className="feature-four__box-inner">
                      <div className="feature-four__box-icon">
                        <i className="flaticon flaticon-property-1"></i>
                      </div>
                      <div className="feature-four__box-right">
                        <h3>100% Online Process</h3>
                        <p>Apply anytime with secure digital verification</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-four__box text-left">
                    <div className="feature-four__box-inner">
                      <div className="feature-four__box-icon">
                        <i className="flaticon flaticon-growth-1"></i>
                      </div>
                      <div className="feature-four__box-right">
                        <h3>Salary-Based Eligibility</h3>
                        <p>Loan offers tailored to your monthly income.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-5">
              <form
                action="#"
                id="loan-calculator"
                data-interest-rate="15"
                className="about-one__form wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <h3>How Much You Need</h3>

                <div className="about-one__form-content">
                  {/* LOAN AMOUNT */}

                  <div className="input-box">
                    <div className="range-header">
                      <label>Loan Amount</label>
                    </div>

                    <div
                      className="range-slider-count"
                      id="range-slider-count"
                    ></div>

                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-count"
                    />

                    <input
                      type="hidden"
                      value=""
                      id="max-value-rangeslider-count"
                    />
                  </div>

                  {/* LOAN TENURE */}

                  <div className="input-box">
                    <div className="range-header">
                      <label>Loan Tenure</label>
                    </div>

                    <div
                      className="range-slider-month"
                      id="range-slider-month"
                    ></div>

                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-month"
                    />

                    <input
                      type="hidden"
                      value=""
                      id="max-value-rangeslider-month"
                    />
                  </div>

                  {/* RESULT */}

                  <p>
                    <span>Pay Monthly</span>

                    <b>
                      ₹ <i id="loan-monthly-pay"></i>
                    </b>
                  </p>

                  <p>
                    <span>Term of Use</span>

                    <b>
                      <i id="loan-month"></i> Months
                    </b>
                  </p>

                  <p>
                    <span>Total Pay Back</span>

                    <b>
                      ₹ <i id="loan-total"></i>
                    </b>
                  </p>

                  <Link href="/applyform" className="thm-btn">
                    Apply For Loan
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrandIntroduction;
