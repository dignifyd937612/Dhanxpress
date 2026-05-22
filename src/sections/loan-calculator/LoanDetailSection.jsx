import { emiSections } from "@/data/loan-calculator/Calculation";
import LoanDetails from "@/components/loan-calculator/LoanDetails";
const LoanDetailSection = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {emiSections.map((section) => (
            <LoanDetails
              key={section?.id}
              title={section?.title}
              description={section?.description}
              formula={section?.formula}
              points={section?.points}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LoanDetailSection;
