import Sectionheader from "@/components/common/Sectionheader";

const AboutCompany = () => {
  return (
    <>
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-three__image">
                <img src="images/resources/about-3-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-three__image">
                <img src="images/resources/about-3-2.png" alt="" />
                <div className="about-three__image-text">Trusted Company</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <Sectionheader
                title={"Get To Know About Us"}
                heading={"Few Words About Our Company"}
                textalign={"left"}
              />
            </div>
            <div className="col-lg-7">
              <p className="block-text">
                About our pylon company to provide loan to customers dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat lorem provide more more funds to
                bank and small middle company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
