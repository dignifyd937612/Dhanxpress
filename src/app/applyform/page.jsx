import ApplyForm from "@/sections/applyNowForm/ApplyForm";
import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";

const ApplyFormPage = () => {
  return (
    <>
      <Banner page_name={"Apply Now"} bannerImage={bannerImage} />
      <ApplyForm />
    </>
  );
};

export default ApplyFormPage;
