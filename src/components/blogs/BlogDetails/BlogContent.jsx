import BlogComments from "./BlogComments";
import blog1 from "../../../../public/images/blog/blog-d-1-1.jpg";
import blog3 from "../../../../public/images/blog/blog-1-3.png";
import blog4 from "../../../../public/images/blog/blog-1-4.png";
import Image from "next/image";
const BlogContent = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-card__image">
          <span>20 Sep, 2023</span>
          <Image src={blog1} alt="" />
        </div>
        <div className="blog-card__meta">
          <a href="#">
            <i className="far fa-folder"></i>Investment
          </a>
          <a href="#">
            <i className="far fa-comments"></i>Comment
          </a>
          <a href="#">
            <i className="far fa-user"></i>Admin
          </a>
        </div>
        <div className="blog-details__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum lorem sed risus ultricies tristique nulla. Sem viverra
            aliquet eget sit cras adipiscing to make a type specimen book.
          </p>

          <p>
            For dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem
            sed risus ultricies tristique nulla. Sem viverra aliquet eget sit
            amet tellus cras adipiscing. Varius sit amet mattis vulputate enim
            nulla.
          </p>

          <blockquote className="blog-details__quote">
            <p>
              Pyloan vel nulla eleifend, euismod magna sed, tristique velit. Nam
              sed eleifend dui, eu eleifend leo. Mauris ornare eros quis
              placerat mollis. Duis ornare euismod risus at dictum lorem quasi
              archi betase via sunt.
            </p>
            <cite>Martin Loker</cite>
          </blockquote>
          <p>
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing.
          </p>

          <div className="blog-card__image-box">
            <div className="row">
              <div className="col-6">
                <Image
                  alt=""
                  src={blog3}
                  className="blog-card__image img-fluid"
                />
              </div>
              <div className="col-6">
                <Image
                  alt=""
                  src={blog4}
                  className="blog-card__image img-fluid"
                />
              </div>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum lorem sed risus ultricies tristique nulla. Sem viverra
            aliquet eget sit amet tellus cras adipiscing. Varius sit amet mattis
            vulputate enim nulla. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>

        <div className="blog-details__bottom">
          <div className="blog-details__tags">
            <span>
              <a href="#">Company</a>
              <a href="#">House Loan</a>
              <a href="#">IT Loan</a>
            </span>
          </div>
          <div className="blog-details__social team-details__social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin-in"></a>
          </div>
        </div>
        <BlogComments />
      </div>
    </>
  );
};

export default BlogContent;
