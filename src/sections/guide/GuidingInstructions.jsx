import styles from "./GuidingInstructions.module.scss";

const GuidingInstructions = () => {
  return (
    <section className={`${styles.loanGuide} py-6`}>
      <div
        className={`${styles.contentBox} max-w-[1200px] mx-auto bg-white p-10`}
      >
        <div className="mb-6">
          <h2 className={styles.heading}>1. What is a Loan?</h2>

          <p className={styles.text}>
            A loan is a sum of money borrowed from a bank or financial
            institution, which must be repaid over time usually with interest.
            Loans help individuals and businesses meet their goals like buying a
            home, funding education, handling emergencies, or expanding a
            business.
          </p>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>2. Types of Loan in India</h2>

          <div className="grid grid-cols-2 gap-x-14 gap-y-5 mt-4">
            <div>
              <h4 className={styles.subHeading}>Personal Loan</h4>
              <p className={styles.text}>
                Unsecured loan for emergency spending, travel, weddings, and
                medical needs.
              </p>
            </div>

            <div>
              <h4 className={styles.subHeading}>Home Loan</h4>
              <p className={styles.text}>
                For buying/building a house or flat.
              </p>
            </div>

            <div>
              <h4 className={styles.subHeading}>Business Loan</h4>
              <p className={styles.text}>
                For starting or expanding a business.
              </p>
            </div>

            <div>
              <h4 className={styles.subHeading}>Car Loan</h4>
              <p className={styles.text}>
                For purchasing new or used vehicles.
              </p>
            </div>

            <div>
              <h4 className={styles.subHeading}>Gold Loan</h4>
              <p className={styles.text}>Secured against gold ornaments.</p>
            </div>

            <div>
              <h4 className={styles.subHeading}>Education Loan</h4>
              <p className={styles.text}>
                For higher studies in India or abroad.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>3. Key Loan Terminology</h2>

          <div className="space-y-2 mt-3">
            <p className={styles.text}>
              <span className={styles.bold}>Principal:</span> The amount you
              borrow from the lender and must repay over time.
            </p>

            <p className={styles.text}>
              <span className={styles.bold}>Interest Rate:</span> The cost of
              borrowing money, expressed as a percentage of the principal.
            </p>

            <p className={styles.text}>
              <span className={styles.bold}>EMI:</span> Fixed monthly payment
              including principal and interest.
            </p>

            <p className={styles.text}>
              <span className={styles.bold}>Tenure:</span> The period over which
              the loan is repaid.
            </p>

            <p className={styles.text}>
              <span className={styles.bold}>CIBIL Score:</span> Credit score
              used by lenders to evaluate repayment history.
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className={styles.heading}>
            4. Factors Affecting Loan Eligibility
          </h2>

          <ul className={`${styles.list} ${styles.green}`}>
            <li>Income & Employment Stability</li>
            <li>CIBIL / Credit Score</li>
            <li>Existing Debts</li>
            <li>Age and Work Experience</li>
            <li>Documents Verification</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>
            5. Steps to Take Before Applying for a Loan
          </h2>

          <ul className={`${styles.list} ${styles.blue}`}>
            <li>Assess Your Loan Requirement</li>
            <li>Check Eligibility</li>
            <li>Compare Interest Rates</li>
            <li>Calculate EMI</li>
            <li>Prepare Documents</li>
            <li>Read Terms Carefully</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>6. How to Apply for a Loan</h2>

          <div className="space-y-2 mt-3">
            <p className={styles.text}>
              <span className={styles.bold}>Online:</span> Fill application form
              and upload documents.
            </p>

            <p className={styles.text}>
              <span className={styles.bold}>Offline:</span> Visit branch with
              required documents.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>7. Repayment & Managing Your Loan</h2>

          <p className={styles.text}>
            Pay EMIs on time to avoid penalties and maintain good credit score.
          </p>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>8. Common Mistakes to Avoid</h2>

          <ul className={`${styles.list} ${styles.red}`}>
            <li>Not comparing enough offers</li>
            <li>Ignoring hidden charges</li>
            <li>Borrowing more than needed</li>
            <li>Missing EMI payments</li>
            <li>Not reading terms and conditions carefully</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className={styles.heading}>9. Frequently Asked Questions</h2>

          <div className="space-y-4 mt-3">
            <div>
              <p className={styles.question}>
                Q: How long does loan approval take?
              </p>

              <p className={styles.text}>
                A: Usually between 24 to 48 hours after verification.
              </p>
            </div>

            <div>
              <p className={styles.question}>Q: Can I prepay my loan?</p>

              <p className={styles.text}>
                A: Yes, depending on lender policies.
              </p>
            </div>

            <div>
              <p className={styles.question}>
                Q: What is the minimum salary required?
              </p>

              <p className={styles.text}>
                A: It depends on lender and loan type.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mt-8">
          <button className={styles.outlineBtn}>Eligibility Checker</button>

          <button className={styles.outlineBtn}>EMI Calculator</button>

          <button className={styles.primaryBtn}>Apply Now</button>
        </div>

        <div className={styles.footerNote}>
          Borrow smart. Stay informed. Achieve your dreams responsibly!
        </div>
      </div>
    </section>
  );
};

export default GuidingInstructions;
