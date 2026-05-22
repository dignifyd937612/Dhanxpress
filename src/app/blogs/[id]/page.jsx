import Banner from "@/components/common/Banner";
import bannerImage from "../../../../public/images/backgrounds/page-header-bg-1-1.jpg";
import BlogsDetailsSection from "@/sections/blogs/blogdetails/BlogsDetailsSection";

const BlogDetails = () => {
  return (
    <>
      <Banner page_name={"Blog Details"} bannerImage={bannerImage} />
      <BlogsDetailsSection />
    </>
  );
};

export default BlogDetails;
