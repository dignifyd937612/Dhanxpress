import Sectionheader from "@/components/common/Sectionheader";

const Charges = () => {
  return (
    <>
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <Sectionheader
            title={"Transparent Loan Charges"}
            heading={"Loan Fees & Repayment Details"}
          />
          <div className="text-center mb-14">
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Transparent loan charges with no hidden costs. Check all
              applicable fees, penalties and repayment related details before
              applying.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-[35px] bg-[#f3a522] p-10 shadow-[0_20px_60px_rgba(243,165,34,0.35)] h-full">
                <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/10"></div>

                <div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 rounded-full bg-white/10"></div>

                <p className="uppercase tracking-[6px] text-white/80 text-sm mb-10">
                  Processing Fee
                </p>

                <h3 className="text-5xl font-black text-[#0c2139] mb-5">
                  3% - 4%
                </h3>

                <p className="text-white text-lg leading-9 mb-14">
                  Processing fee is deducted from the approved loan amount
                  during disbursal.
                </p>

                <div className="space-y-7">
                  <div className="flex items-center justify-between border-b border-white/30 pb-5">
                    <span className="text-white text-lg">Minimum Loan</span>

                    <span className="text-[#0c2139] font-black text-3xl">
                      ₹1L
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/30 pb-5">
                    <span className="text-white text-lg">Maximum Loan</span>

                    <span className="text-[#0c2139] font-black text-3xl">
                      ₹10L
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg">Loan Tenure</span>

                    <span className="text-[#0c2139] font-black text-3xl">
                      6-48 Months
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 content-start">
                <div className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#fff4df] flex items-center justify-center text-3xl mb-8">
                    %
                  </div>

                  <h4 className="text-3xl font-black text-[#0c2139] mb-6">
                    Interest Rate
                  </h4>

                  <h5 className="text-[#f3a522] text-3xl font-black mb-6">
                    11.49% - 19.99%
                  </h5>

                  <p className="text-gray-500 text-lg leading-9">
                    Interest calculated on reducing balance basis.
                  </p>
                </div>

                <div className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#e7f8eb] flex items-center justify-center text-3xl mb-8">
                    🔓
                  </div>

                  <h4 className="text-3xl font-black text-[#0c2139] mb-6">
                    Foreclosure
                  </h4>

                  <h5 className="text-[#22c55e] text-3xl font-black mb-6">
                    ZERO Charges
                  </h5>

                  <p className="text-gray-500 text-lg leading-9">
                    No lock-in period or hidden foreclosure fees.
                  </p>
                </div>

                <div className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffe8e8] flex items-center justify-center text-3xl mb-8">
                    ⛔
                  </div>

                  <h4 className="text-3xl font-black text-[#0c2139] mb-6">
                    Bounce Charges
                  </h4>

                  <h5 className="text-[#ff3b3b] text-3xl font-black mb-6">
                    ₹500 + Taxes
                  </h5>

                  <p className="text-gray-500 text-lg leading-9">
                    Applicable in case of EMI bounce or failed auto debit.
                  </p>
                </div>

                {/* CARD */}

                <div className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#fff7cf] flex items-center justify-center text-3xl mb-8">
                    ⚠️
                  </div>

                  <h4 className="text-3xl font-black text-[#0c2139] mb-6">
                    Penal Charges
                  </h4>

                  <h5 className="text-[#d98b00] text-3xl font-black mb-6">
                    2% / Month
                  </h5>

                  <p className="text-gray-500 text-lg leading-9">
                    Applied on overdue EMI amount till repayment.
                  </p>
                </div>
              </div>

              <div className="bg-[#000000] rounded-[30px] p-10 mt-6 shadow-2xl h-fit">
                <h4 className="text-4xl font-black text-white mb-6">
                  Important Note
                </h4>

                <p className="text-gray-300 text-lg leading-10">
                  Final loan amount, interest rate and approval depend on
                  salary, employment profile, repayment history and credit
                  score. Terms may vary depending on lender policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charges;
