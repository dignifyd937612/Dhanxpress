import Banner from "@/components/common/Banner";
import AboutCompany from "@/sections/aboutus/AboutCompany";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import Testimonials from "@/sections/home/Testimonials";
import VideoSection from "@/sections/aboutus/VideoSection";
import Stats from "@/sections/home/Stats";
import Team from "@/sections/aboutus/Team";
import LogoSlider from "@/components/common/LogoSlider";

const AboutUsPage = () => {
  return (
    <>
      <Banner page_name={"About Us"} bannerImage={bannerImage} />
      <AboutCompany />
      <Testimonials />
      <VideoSection />
      <Stats />
      <Team />
      <LogoSlider />
    </>
  );
};

export default AboutUsPage;
