import styles from "../../sections/loan-calculator/LoanDetailSection.module.scss";
const LoanDetails = ({ title, description, formula, points }) => {
  return (
    <>
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className={styles.sectionHeading}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </div>

        <div className={styles.infoBox}>
          {formula && <p className={styles.formulaText}>{formula}</p>}

          <ul className="space-y-5">
            {console.log(points, " : points")}
            {points.map((point, index) => (
              <li key={index} className={styles.listItem}>
                <span>{point.heading}</span> {point.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
