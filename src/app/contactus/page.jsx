import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import ContactUsForm from "@/sections/home/ContactUsForm";
import GoogleMap from "@/components/contactus/GoogleMap";
const ContactUsPage = () => {
  return (
    <>
      <Banner page_name={"Contact Us"} bannerImage={bannerImage} />
      <ContactUsForm />
      <GoogleMap />
    </>
  );
};

export default ContactUsPage;
