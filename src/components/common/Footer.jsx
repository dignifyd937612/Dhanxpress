import Link from "next/link";
import img from "../../../public/images/backgrounds/call-to-action-bg-1-1.jpg";
import Image from "next/image";
import footePostImage from "../../../public/images/resources/footer-post-1-1.png";
const Footer = () => {
  return (
    <>
      <section
        className="call-to-action"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="container">
          <div className="left-content">
            <p>
              <span>Simple</span>
              <span>Transparent</span>
              <span>Secure</span>
            </p>
            <h3>Get a Business Loans Quickly</h3>
          </div>
          <div className="right-content">
            <Link href="/applyform" className="thm-btn">
              Apply For Loan
            </Link>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-widget__about">
                <Link href="index.html">
                  <img src="assets/images/logo-light.png" width="155" alt="" />
                 </Link>
                <p>
                  Welcome to pylon loand company we are provide loan as very
                  reasonably interest and you can provide document etur labore.
                </p>
                <div className="footer-widget__about-phone">
                  <i className="pylon-icon-tech-support"></i>
                  <div className="footer-widget__about-phone-content">
                    <span>Call Anytime</span>
                    <h3>
                      <Link href="tel:+19812310000">+1 9812310000 </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget footer-widget__link">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/">
                      <i className="fa fa-arrow-right"></i>Home
                     </Link>
                  </li>
                  <li>
                    <Link href="/aboutus">
                      <i className="fa fa-arrow-right"></i>About Us
                     </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-calculator">
                      <i className="fa fa-arrow-right"></i>Calculator
                     </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-eligibility">
                      <i className="fa fa-arrow-right"></i>Eligibility
                     </Link>
                  </li>
                  <li>
                    <Link href="/contactus">
                      <i className="fa fa-arrow-right"></i>Contact
                     </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <i className="fa fa-arrow-right"></i>Blogs
                     </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-widget__post">
                <h3 className="footer-widget__title">Latest Blogs</h3>
                <ul className="list-unstyled footer-widget__post-list">
                  <li>
                    <Image src={footePostImage} alt="" />
                    <div className="footer-widget__post-list-content">
                      <span>October 16, 2023</span>
                      <h3>
                        <Link href="news-details.html">
                          We’re Providing the Quality Services
                         </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <Image src={footePostImage} alt="" />
                    <div className="footer-widget__post-list-content">
                      <span>October 16, 2023</span>
                      <h3>
                        <Link href="news-details.html">
                          We’re Providing the Quality Services
                         </Link>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget footer-widget__contact">
                <h3>Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <Link href="mailto:needhelp@company.com">
                      <i className="pylon-icon-email1"></i>needhelp@company.com
                     </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM -
                      6:00 PM
                     </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="pylon-icon-pin1"></i>80 Broklyn Golden
                      Street, New York. USA
                     </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container">
          <p>© Copyright 2023 by Company.com</p>
          <div className="bottom-footer__social">
            <Link href="#" className="fab fa-facebook-f"> </Link>
            <Link href="#" className="fab fa-twitter"> </Link>
            <Link href="#" className="fab fa-pinterest-p"> </Link>
            <Link href="#" className="fab fa-instagram"> </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
