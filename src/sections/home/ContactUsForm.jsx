import Sectionheader from "@/components/common/Sectionheader";

const ContactUsForm = () => {
  return (
    <>
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-one__content">
                <Sectionheader
                  title={"Get in touch with us"}
                  heading={"Ask for your query"}
                  textalign="left"
                />
                <div className="contact-one__box">
                  <i className="pylon-icon-telephone"></i>
                  <div className="contact-one__box-content">
                    <h4>Call Anytime</h4>
                    <a href="tel:92666888000">92 666 888 0000</a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-email1"></i>
                  <div className="contact-one__box-content">
                    <h4>Write Email</h4>
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-pin1"></i>
                  <div className="contact-one__box-content">
                    <h4>Visit Office</h4>
                    <a href="#">80 Marktin Colvel, Broklyn, New York, USA</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form className="contact-one__form">
                <div className="row low-gutters">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control contact-one__form-input"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control contact-one__form-input"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control contact-one__form-input"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control contact-one__form-input"
                        name="subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        className="contact-one__form-input"
                      ></textarea>
                    </div>
                    <button className="thm-btn" type="submit">
                      Send A Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUsForm;
