import Sectionheader from "@/components/common/Sectionheader";
import TipCard from "@/components/personal-loan-eligibility/TipCard";
import { eligibilityTips } from "@/data/personal-loan-eligibility/EligibilityTips";

export default function TipSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Sectionheader
        title={"Tips For Good Eligibility Loan"}
        heading={"Tips to Improve Personal Loan Eligibility"}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {eligibilityTips.map((tip, index) => (
          <TipCard
            key={index}
            icon={tip?.icon}
            title={tip?.title}
            desc={tip?.desc}
          />
        ))}
      </div>
    </div>
  );
}
