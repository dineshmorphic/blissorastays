import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";

const celebrateData = [
  {
    id: 1,
    img: "/images/holiday-stays.webp",
    title: "Holiday Stays",
    desc: "Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl.",
  },
  {
    id: 2,
    img: "/images/holiday-stays.webp",
    title: "Wedding Events",
    desc: "Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat ornare cursus.",
  },
  {
    id: 3,
    img: "/images/holiday-stays.webp",
    title: "Corporate Retreats",
    desc: "Pharetra elementum mus ornare cursus pretium vel lorem ipsum dolor sit amet.",
  },
  // {
  //   id: 4,
  //   img: "/images/holiday-stays.webp",
  //   title: "Private Parties",
  //   desc: "Et diam sit sagittis eget eget magna arcu nisl scelerisque lobortis augue mauris.",
  // },
];

const LuxuryVilla = () => {
  return (
    <section className={`${styles.luxuryVilla} paddingBlock`}>
      <div className="container">

        <div className={`title ${styles.luxuryVillaTitle}`}>
          <p>Latest Updates </p>

          <h2>
            The Ultimate Guide To Luxury Villa Holidays In India
          </h2>
        </div>

        <div className={styles.luxuryVillaRow}>

          {celebrateData.map((item) => (
            <div
              key={item.id}
              className={styles.luxuryVillaCol}
            >
              <div className={styles.luxuryVillaContent}>

                <Image
                  src={item.img}
                  alt={item.title}
                  width={488}
                  height={333}
                  className={styles.luxuryVillaImg}
                />

                <div className={styles.text}>
                  <p className={styles.date}>10 April, 2026</p>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LuxuryVilla;