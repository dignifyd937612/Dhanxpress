import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import GuidingInstructions from "@/sections/guide/GuidingInstructions";

const Guide = () => {
  return (
    <>
      <Banner page_name={"Loan Guide"} bannerImage={bannerImage} />
      <GuidingInstructions />
    </>
  );
};

export default Guide;
