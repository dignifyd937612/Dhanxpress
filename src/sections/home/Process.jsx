import Sectionheader from "@/components/common/Sectionheader";
import Link from "next/link";

const Process = () => {
  return (
    <>
      <section className="how-works-two">
        <div className="container">
          <Sectionheader
            title={"Work Process"}
            heading={"How It Works In Easy Way"}
          />
          <div className="row">
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="how-works-two__single">
                <div className="how-works-two__single__inner">
                  <i className="how-works-two__single__icon__floated flaticon-peer-to-peer"></i>
                  <i className="how-works-two__single__icon flaticon-peer-to-peer"></i>
                  <h3 className="how-works-two__single__title">
                    <Link href="#">Meet Agent</Link>
                  </h3>
                  <p className="how-works-two__single__text">
                    Capitalize on low hanging fruit to ballpark value
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="how-works-two__single">
                <div className="how-works-two__single__inner">
                  <i className="how-works-two__single__icon__floated flaticon-bank"></i>
                  <i className="how-works-two__single__icon flaticon-bank"></i>
                  <h3 className="how-works-two__single__title">
                    <Link href="#">Discussion</Link>
                  </h3>
                  <p className="how-works-two__single__text">
                    Capitalize on low hanging fruit to ballpark value
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="how-works-two__single">
                <div className="how-works-two__single__inner">
                  <i className="how-works-two__single__icon__floated flaticon-payment-1"></i>
                  <i className="how-works-two__single__icon flaticon-payment-1"></i>
                  <h3 className="how-works-two__single__title">
                    <Link href="#">Submit Document</Link>
                  </h3>
                  <p className="how-works-two__single__text">
                    Capitalize on low hanging fruit to ballpark value
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="how-works-two__single">
                <div className="how-works-two__single__inner">
                  <i className="how-works-two__single__icon__floated flaticon-save-money"></i>
                  <i className="how-works-two__single__icon flaticon-save-money"></i>
                  <h3 className="how-works-two__single__title">
                    <Link href="#">Get Loan</Link>
                  </h3>
                  <p className="how-works-two__single__text">
                    Capitalize on low hanging fruit to ballpark value
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="how-works-two__btns text-center">
            <Link href="/applyform">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
