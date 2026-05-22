"use client";

import style from "./LoanDocuments.module.scss";

import { useState } from "react";

import {
  UserSquare2,
  BriefcaseBusiness,
  Landmark,
  FileText,
} from "lucide-react";

const loanTabs = [
  {
    id: 1,
    title: "1. Identity & Address Proof",
    icon: <UserSquare2 size={18} />,
    gradientClass: style.greenGradient,
    textClass: style.greenText,
    docs: [
      "Aadhaar Card (Front & Back)",
      "PAN Card (Mandatory)",
      "Passport / Voter ID (Optional)",
      "Utility Bill (Electricity/Gas)",
    ],
  },

  {
    id: 2,
    title: "2. Income & Employment",
    icon: <BriefcaseBusiness size={18} />,
    gradientClass: style.pinkGradient,
    textClass: style.pinkText,
    docs: [
      "Last 3 Months Salary Slips",
      "Bank Statement (6 Months)",
      "Company ID Card",
      "Latest Form 16 / ITR",
    ],
  },

  {
    id: 3,
    title: "3. Bank Details & Others",
    icon: <Landmark size={18} />,
    gradientClass: style.orangeGradient,
    textClass: style.orangeText,
    docs: [
      "Cancelled Cheque",
      "Bank Passbook Copy",
      "Passport Size Photograph",
      "Existing Loan Statement",
    ],
  },
];

const LoanDocumentsSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activeData = loanTabs.find((item) => item.id === activeTab);

  return (
    <>
      <section className={style.loanDocumentsSection}>
        <div className={style.loanDocumentsContainer}>
          {/* HEADING */}

          <div className={style.loanDocumentsHeading}>
            <h2>Required Loan Documents</h2>

            <p>
              To ensure instant approval, please keep the following documents
              ready for secure digital upload.
            </p>
          </div>

          {/* MAIN WRAPPER */}

          <div className={style.loanDocumentsWrapper}>
            {/* LEFT SIDEBAR */}

            <div className={style.loanDocumentsSidebar}>
              {loanTabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`${style.loanDocumentsTab} ${
                    activeTab === item.id ? style.active : ""
                  }`}
                >
                  <div
                    className={`${style.loanDocumentsIcon} ${item.gradientClass}`}
                  >
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}

            <div className={style.loanDocumentsContent}>
              {/* TOP */}

              <div className={style.loanDocumentsTop}>
                <div
                  className={`${style.loanDocumentsMainIcon} ${activeData.gradientClass}`}
                >
                  {activeData.icon}
                </div>

                <h2 className={activeData.textClass}>{activeData.title}</h2>
              </div>

              {/* DOCUMENTS */}

              <div className={style.loanDocumentsList}>
                {activeData.docs.map((doc, index) => (
                  <div key={index} className={style.loanDocumentsItem}>
                    <div className={style.loanDocumentsLeft}>
                      <FileText size={18} />

                      <p>{doc}</p>
                    </div>

                    <span className={style.loanDocumentsFormat}>PDF/JPEG</span>
                  </div>
                ))}
              </div>

              {/* FOOTER */}

              <div className={style.loanDocumentsFooter}>
                <p>All documents must be clear, valid and readable.</p>

                <button>Proceed to Secure Upload</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanDocumentsSection;
