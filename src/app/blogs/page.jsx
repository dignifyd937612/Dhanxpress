import Banner from "@/components/common/Banner";
import bannerImage from "../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import BlogsSection from "@/sections/blogs/BlogSection";

const Blogs = () => {
  return (
    <>
      <Banner page_name={"Blogs"} bannerImage={bannerImage} />
      <BlogsSection />
    </>
  );
};

export default Blogs;
