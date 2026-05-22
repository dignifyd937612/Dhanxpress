const FeatureCard = ({ icon, text }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="feature-one__box">
          <i className={icon}></i>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
