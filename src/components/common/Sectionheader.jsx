const Sectionheader = ({ title, heading, textalign = "center" }) => {
  return (
    <>
      <div className={`block-title text-${textalign}`}>
        <p>{title}</p>
        <h2>{heading}</h2>
      </div>
    </>
  );
};

export default Sectionheader;
