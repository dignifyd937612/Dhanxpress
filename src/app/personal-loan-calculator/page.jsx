import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import LoanDetailSection from "@/sections/loan-calculator/LoanDetailSection";
import LoanCalculator from "@/components/loan-calculator/LoanCalculator";
import Charges from "@/sections/loan-calculator/Charges";
import LoanDocuments from "@/components/common/LoanDocuments";

const LoanCalculatorPage = () => {
  return (
    <>
      <Banner page_name={"Loan Calculator"} bannerImage={bannerImage} />
      <LoanCalculator />
      <Charges />
      <LoanDocuments />
      <LoanDetailSection />
    </>
  );
};

export default LoanCalculatorPage;
