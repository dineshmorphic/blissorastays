import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";

const logoData = [
  "/images/logo-01.svg",
  "/images/logo-02.svg",
  "/images/logo-03.svg",
  "/images/logo-04.svg",
  "/images/logo-05.svg",
  "/images/logo-06.svg",
];

const features = [
  {
    text: "Preferred by",
    highlight: "Villa Owners",
  },
  {
    text: "",
    highlight: "Premium Villas",
    extra: "Across India",
  },
  {
    text: "",
    highlight: "Stress Free",
    extra: "Bookings",
  },
  {
    text: "Expert",
    highlight: "Management Team",
  },
];

const LeadingPartners = () => {
  return (
    <>
      {/* ===== Top Section ===== */}
      <section className={`${styles.leadingPartners} paddingBlock`}>
        <div className="container">
          {/* Title */}
          <div className={`title ${styles.leadingPartnersTitle}`}>
            <p>Trusted by Leading Partners</p>

            <h2>Partnered With Leading Global Travel Brands</h2>
          </div>

          {/* Logos */}
          <div className={styles.logoMarquee}>
            <div className={styles.logoTrack}>
              {logoData.concat(logoData).map((logo, index) => (
                <div className={styles.logo} key={index}>
                  <Image src={logo} alt="brand-logo" width={145} height={36} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Image Area ===== */}
      <section className={styles.area}>
        <div className="container">
          {/* Bottom Features */}
          <div className={styles.areaRow}>
            {features.map((item, index) => (
              <div className={styles.areaCol} key={index}>
                <p>
                  {item.text && <span>{item.text}</span>}{" "}
                  <strong>{item.highlight}</strong>{" "}
                  {item.extra && <span>{item.extra}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadingPartners;
