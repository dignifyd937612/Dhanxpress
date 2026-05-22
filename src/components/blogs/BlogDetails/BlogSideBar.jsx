import Image from "next/image";
import blogimg from "../../../../public/images/services/service-sidebar-1-1.jpg";
import blog1 from "../../../../public/images/blog/lp-1-1.png";
import blog2 from "../../../../public/images/blog/lp-1-2.png";
import blog3 from "../../../../public/images/blog/lp-1-3.png";
const BlogSideBar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-sidebar">
          <div className="blog-sidebar__box blog-sidebar__search">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search"
                className="search-field"
              />
              <button type="submit" className="search-submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="blog-sidebar__box blog-sidebar__post">
            <h3 className="blog-sidebar__box-title">Recent Posts</h3>
            <ul className="list-unstyled footer-widget__post-list">
              <li>
                <Image src={blog1} alt="" />
                <div className="footer-widget__post-list-content">
                  <span>October 16, 2023</span>
                  <h3>
                    <a href="news-details.html">
                      For Car auto you will get 90% loan amount
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <Image src={blog2} alt="" />
                <div className="footer-widget__post-list-content">
                  <span>October 16, 2023</span>
                  <h3>
                    <a href="news-details.html">
                      How to get education loan for overseas
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <Image src={blog3} alt="" />
                <div className="footer-widget__post-list-content">
                  <span>October 16, 2023</span>
                  <h3>
                    <a href="news-details.html">
                      Easy way to calculate interest on a loan
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="blog-sidebar__box blog-sidebar__tags">
            <h3 className="blog-sidebar__box-title">Tags</h3>
            <ul className="list-unstyled blog-sidebar__tags-list">
              <li>
                <a href="#">bank</a>
              </li>
              <li>
                <a href="#">business</a>
              </li>
              <li>
                <a href="#">check</a>
              </li>
              <li>
                <a href="#">company</a>
              </li>
              <li>
                <a href="#">doc</a>
              </li>
              <li>
                <a href="#">house loan</a>
              </li>
              <li>
                <a href="#">it loan</a>
              </li>
              <li>
                <a href="#">loan</a>
              </li>
              <li>
                <a href="#">new</a>
              </li>
              <li>
                <a href="#">video</a>
              </li>
            </ul>
          </div>

          <div className="blog-sidebar__box blog-sidebar__call">
            <div className="service-sidebar__call">
              <div
                className="service-sidebar__call-bg"
                style={{ backgroundImage: `url(${blogimg.src})` }}
              ></div>
              <i className="pylon-icon-tech-support"></i>
              <h3>
                <a href="tel:(+01)1234567890">(+01) 123 456 7890</a>
              </h3>
              <div className="pylon-mail">
                <a href="mailto:info@company.com">info@company.com</a>
              </div>
              <p>
                We are here to help our customer any time. You can call on 24/7
                To Answer Your Question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
