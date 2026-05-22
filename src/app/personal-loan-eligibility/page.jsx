import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import LoanEligibility from "@/sections/home/LoanEligibility";
import TipSection from "@/sections/personal-loan-eligibility/TipSection";
import FAQs from "@/sections/home/FAQs";

const EligibilityPage = () => {
  return (
    <>
      <Banner page_name={"Loan Eligibility"} bannerImage={bannerImage} />
      <LoanEligibility />
      <TipSection />
      <FAQs />
    </>
  );
};

export default EligibilityPage;
