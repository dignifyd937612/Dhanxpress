"use client";

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-card">
        <div className="blog-card__image">
          <span>{blog.date}</span>

          <Image src={blog.image} alt={blog.title} />
        </div>

        <div className="blog-card__content">
          <div className="blog-card__meta">
            <Link href="#">
              <i className="far fa-user"></i>
              {blog.author}
            </Link>

            <Link href={blog.link}>
              <i className="far fa-credit-card"></i>
              {blog.category}
            </Link>
          </div>

          <h3>
            <Link href={blog.link}>{blog.title}</Link>
          </h3>

          <div className="blog-card__bottom">
            <div className="blog-card-bottom-readmore">
              <Link href={blog.link} className="readmore-card-link">
                <i className="pylon-icon-right-arrow"></i>
                Read More
              </Link>
            </div>

            <span className="blog_comment">
              <Link href="#">
                <i className="far fa-comments"></i>
                {blog.comments} Comments
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
