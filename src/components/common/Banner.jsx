const Banner = ({ page_name, bannerImage }) => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${bannerImage.src})` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li>
              <span>{page_name}</span>
            </li>
          </ul>
          <h2>{page_name}</h2>
        </div>
      </section>
    </>
  );
};
export default Banner;
