import WhyChooseUs from "@/components/home/whyChooseUs";
import DownloadApp from "@/sections/common/DownloadApp";
import Banner from "@/sections/home/Banner";
import BrandIntroduction from "@/sections/home/BrandIntroduction";
import ContactUsForm from "@/sections/home/ContactUsForm";
import FAQs from "@/sections/home/FAQs";
import KnowAboutBusiness from "@/sections/home/KnowAboutBusiness";
import LoanEligibility from "@/sections/home/LoanEligibility";
import LoanServices from "@/sections/home/LoanServices";
import Process from "@/sections/home/Process";
import Stats from "@/sections/home/Stats";
import Testimonials from "@/sections/home/Testimonials";
import TrustedCompany from "@/sections/home/TrustedCompany";

export default function Home() {
  return (
    <>
      <Banner />
      <BrandIntroduction />
      <LoanServices />
      <KnowAboutBusiness />
      <TrustedCompany />
      <Testimonials />
      <WhyChooseUs />
      <Process />
      <LoanEligibility />
      <Stats />
      <ContactUsForm />
      <FAQs />
      <DownloadApp />
    </>
  );
}
