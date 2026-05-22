import BlogContent from "@/components/blogs/BlogDetails/BlogContent";
import BlogSideBar from "@/components/blogs/BlogDetails/BlogSideBar";

const BlogsDetailsSection = () => {
  return (
    <>
      <section className="blog-details pt-100 pb-100">
        <div className="container">
          <div className="row">
            <BlogContent />
            <BlogSideBar />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogsDetailsSection;
