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
  {
    id: 4,
    img: "/images/holiday-stays.webp",
    title: "Private Parties",
    desc: "Et diam sit sagittis eget eget magna arcu nisl scelerisque lobortis augue mauris.",
  },
];

const CelebrateStyle = () => {
  return (
    <section className={`${styles.celebrateStyle} paddingBlock`}>
      <div className="container">

        <div className={`title ${styles.celebrateStyleTitle}`}>
          <p>Celebrate in Style</p>

          <h2>
            Perfect Venues For Unforgettable Celebrations
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur.
            Et diam sit sagittis eget eget magna arcu nisl.
            Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat.
            Pharetra elementum mus ornare cursus pretium vel.
          </p>
        </div>

        <div className={styles.celebrateStyleRow}>

          {celebrateData.map((item) => (
            <div
              key={item.id}
              className={styles.celebrateStyleCol}
            >
              <div className={styles.celebrateStyleContent}>

                <Image
                  src={item.img}
                  alt={item.title}
                  width={352}
                  height={432}
                  className={styles.celebrateStyleImg}
                />

                <div className={styles.text}>
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

export default CelebrateStyle;