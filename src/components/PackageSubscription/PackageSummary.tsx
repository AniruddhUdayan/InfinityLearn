import React from "react";
import Image from "next/image";
import "./css/packageSubscription.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const PackageSummary = () => {
  return (
    <div className="package-summary-container">
      <div className="package-summary-logo">
        <Image
          src="/images/logo1.png"
          alt="Your Logo"
          width={219}
          height={55}
        />
      </div>
      <div className="package-summary-sub-container">
        <div className={`${poppins600.className} package-summary-head`}>
          package summary
        </div>
        <div className="package-summary-package">
          <div className="package-summary-package-1">
            <div
              className={`${poppins600.className} package-summary-package-1-head`}
            >
              NEET 2023-2024 Grade 12 Lakshya Full Course Ultimate Package
            </div>
            <div
              className={`${poppins400.className}  package-summary-package-1-sub`}
            >
              <span className={`${poppins600.className}  text-[#007BFF]`}>
                Validity :
              </span>{" "}
              31 may 2024
            </div>
          </div>
          <div className="package-summary-package-class">
            <div
              className={`${poppins700.className} package-summary-package-class-text`}
            >
              class 11 + 12{" "}
            </div>
          </div>
          <div className="package-summary-package-checklist">
            <div
              className={`${poppins400.className} package-summary-package-checklist-text`}
            >
              <Image
                src="/images/checklist1.png"
                alt="Your Logo"
                width={19}
                height={18}
              />
              <div>
                100+ hours{" "}
                <span className={`${poppins600.className} text-[#007BFF]`}>
                  live classes
                </span>
              </div>
            </div>
            <div
              className={`${poppins400.className} package-summary-package-checklist-text`}
            >
              <Image
                src="/images/checklist1.png"
                alt="Your Logo"
                width={19}
                height={18}
              />
              <div>
                2000 hours{" "}
                <span className={`${poppins600.className} text-[#007BFF]`}>
                  recorded
                </span>{" "}
                classes
              </div>
            </div>
            <div
              className={`${poppins400.className} package-summary-package-checklist-text`}
            >
              <Image
                src="/images/checklist1.png"
                alt="Your Logo"
                width={19}
                height={18}
              />
              <div>
                24 biweekly mock tests{" "}
                <span className={`${poppins600.className} text-[#007BFF]`}>
                  (AITS)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="package-summary-package-coupon">
          <div className="flex flex-row gap-2">
            {" "}
            <div className="h-[18px]">
              <Image
                src="/images/mixset.png"
                alt="Your Logo"
                width={18}
                height={18}
              />
            </div>
            <div
              className={`${poppins400.className} package-summary-package-coupon-text`}
            >
              Got a Coupon?, Apply here
            </div>
          </div>
          <div
            className={`${poppins600.className} package-summary-package-coupon-apply`}
          >
            Apply
          </div>
        </div>
        <div>
          {" "}
          <div className="package-summary-billing-container">
            <div className="flex flex-row gap-2">
              {" "}
              <div
                className={`${poppins600.className}  package-summary-billing`}
              >
                Billing Summary
              </div>
              <div
                className={`${poppins700.className}  package-summary-billing-save`}
              >
                Save 22%
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className={`${poppins400.className}  text-[14px]`}>
                Subtotal
              </div>
              <div className={`${poppins.className}  text-[14px]`}>
                ₹ 90,000
              </div>
            </div>
          </div>
          <hr className="my-[12px]"></hr>
          <div className="package-summary-billing-container">
            <div className="flex flex-row justify-between">
              <div className={`${poppins400.className}  text-[14px]`}>
                Discount (Coupon STAR75)
              </div>
              <div className={`${poppins.className}  text-[14px]`}>
                - ₹ 30,000
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className={`${poppins400.className}  text-[14px]`}>
                You save ,
                <span className={`${poppins700.className}`}>₹ 30,000 </span>
              </div>
            </div>
          </div>
          <hr className="my-[12px]"></hr>
          <div className="package-summary-billing-container">
            <div className="flex flex-row justify-between">
              <div
                className={`${poppins600.className}  text-[24px] text-[#007BFF]`}
              >
                Grand Total
              </div>
              <div
                className={`${poppins600.className}  text-[24px] text-[#007BFF]`}
              >
                ₹ 60,000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className={`${poppins.className}  text-[14px]`}>
                EMI starts with
                <span className={`${poppins700.className}`}> ₹ 5,750 </span>
              </div>
              <div className={`${poppins400.className}  text-[10px]`}>
                Inclusive of all Taxes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSummary;
