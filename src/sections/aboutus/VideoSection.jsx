import Link from "next/link";
import bgImg from "../../../public/images/backgrounds/video-bg-1-1.jpg";
const VideoSection = () => {
  return (
    <>
      <section className="video-two">
        <div
          className="video-two__bg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="container">
          <Link href="#" className="video-one__btn video-popup">
            <i className="fa fa-play"></i>
          </Link>
          <h3>We Can Give Best Facilities For Business</h3>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
