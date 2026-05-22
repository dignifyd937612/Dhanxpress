const ApplyForm = () => {
  return (
    <>
      <section className="apply-one">
        <div className="container">
          <form className="contact-one__form">
            <div className="contact-one__form-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="block-title">
                    <p className="small-title">Calculate you loan amount</p>
                    <h2 className="title-block">Loan Details</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Loan Amount*</label>
                    <input
                      type="number"
                      name="loanamount"
                      className="form-control contact-one__form-input"
                      placeholder="Loan Amount"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Monthly Income*</label>
                    <input
                      type="number"
                      name="income"
                      className="form-control contact-one__form-input"
                      placeholder="Monthly Income"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      name="purposeloan"
                      className="contact-one__form-input custom-select"
                      required=""
                    >
                      <option value="">Select Purpose of Loan</option>
                      <option value="Business">Business</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Car Purchase">Car Purchase</option>
                      <option value="Holiday">Holiday</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Investment">Investment</option>
                      <option value="Payday Loan">Payday Loan</option>
                      <option value="Startup">Startup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Loan Years</label>
                    <select
                      id="loanyears"
                      name="loanyears"
                      className="contact-one__form-input custom-select"
                      required
                    >
                      <option value="">Select Loan Year</option>
                      <option value="6 Months">6 Months</option>
                      <option value="1 Year">1 Year</option>
                      <option value="2 Years">2 Years</option>
                      <option value="3 Years">3 Years</option>
                      <option value="4 Years">4 Years</option>
                      <option value="5 Years">5 Years</option>
                      <option value="6 Years">6 Years</option>
                      <option value="7 Years">7 Years</option>
                      <option value="8 Years">8 Years</option>
                      <option value="9 Years">9 Years</option>
                      <option value="10 Years">10 Years</option>
                      <option value="11 Years">11 Years</option>
                      <option value="12 Years">12 Years</option>
                      <option value="13 Years">13 Years</option>
                      <option value="14 Years">14 Years</option>
                      <option value="15+ Years">15+ Years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-one__form-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="block-title">
                    <p className="small-title">Ask for More Details</p>
                    <h2 className="title-block">Personal Details</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Full Name <strong>[as per Taxpayer ID]</strong>
                    </label>
                    <input
                      type="text"
                      name="yourname"
                      className="form-control contact-one__form-input"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="email"
                      name="your-email"
                      className="form-control contact-one__form-input"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Mobile Number*</label>
                    <input
                      type="number"
                      name="phonenumber"
                      className="form-control contact-one__form-input"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Marital Status*</label>
                    <select
                      name="martialstatus"
                      className="contact-one__form-input custom-select"
                      required
                    >
                      <option value="">Select Martial Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Co Habiting">Co Habiting</option>
                      <option value="Separated">Separated</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Civil Union">Civil Union</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Partner">Partner</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Birth Date* <strong>[as per Taxpayer ID]</strong>
                    </label>
                    <input
                      type="text"
                      name="birthdate"
                      className="form-control contact-one__form-input"
                      placeholder="Birth Date"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Number Of Dependents*</label>
                    <select
                      name="numberofdependents"
                      className="contact-one__form-input custom-select"
                      required
                    >
                      <option value="">Select Dependents</option>
                      <option value="0 Dependents">0 Dependents</option>
                      <option value="1 Dependents">1 Dependents</option>
                      <option value="2 Dependents">2 Dependents</option>
                      <option value="3 Dependents">3 Dependents</option>
                      <option value="4+ Dependents">4+ Dependents</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-one__form-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="block-title">
                    <p className="small-title">Street, City And State</p>
                    <h2 className="title-block">Address Details</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>House No/Name*</label>
                    <input
                      type="text"
                      name="house-no"
                      className="form-control contact-one__form-input"
                      placeholder="House Number/Name"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Street*</label>
                    <input
                      type="text"
                      name="street"
                      className="form-control contact-one__form-input"
                      placeholder="Street"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>City*</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control contact-one__form-input"
                      placeholder="Birth Date"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>State*</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control contact-one__form-input"
                      placeholder="State"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Country*</label>
                    <input
                      type="text"
                      name="country"
                      className="form-control contact-one__form-input"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Pin Code*</label>
                    <input
                      type="number"
                      name="pin"
                      className="form-control contact-one__form-input"
                      placeholder="Pin Code"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-one__form-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="block-title">
                    <p className="small-title">Employment and other stuff</p>
                    <h2 className="title-block">Other Details</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Employment Industry*</label>
                    <input
                      type="text"
                      name="employmentindustry"
                      className="form-control contact-one__form-input"
                      placeholder="Employment Industry"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Employer Name*</label>
                    <input
                      type="text"
                      name="employer_name"
                      className="form-control contact-one__form-input"
                      placeholder="Employer Name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Employer Status*</label>
                    <select
                      name="employer_status"
                      className="contact-one__form-input custom-select"
                      required
                    >
                      <option value="">Select Employer Status</option>
                      <option value="Full Time Employed">
                        Full Time Employed
                      </option>
                      <option value="Part Time Employed">
                        Part Time Employed
                      </option>
                      <option value="Self Employed">Self Employed</option>
                      <option value="Temporarily Employed">
                        Temporarily Employed
                      </option>
                      <option value="Student">Student</option>
                      <option value="Pension">Pension</option>
                      <option value="Disability">Disability</option>
                      <option value="Unemployed">Unemployed</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Length of Employment*</label>
                    <input
                      type="text"
                      name="lengthemployment"
                      className="form-control contact-one__form-input"
                      placeholder="Length of Employment"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Work Phone Number*</label>
                    <input
                      type="number"
                      name="worknumber"
                      className="form-control contact-one__form-input"
                      placeholder="Work Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-one__form-submit">
              <div className="row">
                <div className="col-md-12">
                  <input type="submit" value="Submit" className="thm-btn" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplyForm;
