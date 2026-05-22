import BlogCard from "@/components/blogs/BlogCard";
import { blogData } from "@/data/blogs/blogs";

const BlogsSection = () => {
  return (
    <>
      <section className="blog-page pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="row">
              {blogData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
