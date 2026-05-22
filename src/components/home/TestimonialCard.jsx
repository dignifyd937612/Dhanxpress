const TestimonialCard = ({ item }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonials-one__box">
        <p>
          <span>{item.message}</span>
        </p>
        <h3>{item.name}</h3>
        <span className="testi_sname">{item.designation}</span>
      </div>

      <div className="testimonials-one__box-info">
        <img src={item.image} alt={item.name} />
      </div>
    </div>
  );
};

export default TestimonialCard;
