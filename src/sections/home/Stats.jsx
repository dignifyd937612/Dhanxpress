import bgImage from "../../../public/images/backgrounds/funfact-bg-1-1.jpg";
const Stats = () => {
  return (
    <>
      <section className="funfact-one">
        <div
          className="funfact-one__bg"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="99">
                    00
                  </span>
                  %
                </h3>
                <p>We Approve Loans</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  ₹
                  <span className="odometer" data-count="90">
                    00
                  </span>
                  K
                </h3>
                <p>Daily Payments</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="8900">
                    00
                  </span>
                </h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="346">
                    00
                  </span>
                </h3>
                <p>Staff Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Stats;
