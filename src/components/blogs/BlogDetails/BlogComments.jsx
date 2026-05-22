const BlogComments = () => {
  return (
    <>
      <div className="blog-comment-form">
        <h2 className="blog-details__box-title">Leave A Reply</h2>
        <form method="post" className="contact-one__form">
          <p>Your email address will not be published.</p>
          <div className="row low-gutters">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control contact-one__form-input"
                  placeholder="Name*"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control contact-one__form-input"
                  placeholder="Email*"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control contact-one__form-input"
                  placeholder="Website"
                  name="website"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-one__form-consent">
                <div className="form-group">
                  <input type="checkbox" name="consent" id="consentCheck" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control contact-one__form-input"
                  placeholder="Your Comment*"
                ></textarea>
              </div>
            </div>
          </div>
          <button className="thm-btn" type="submit">
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogComments;
