"use client";

import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonialsData = [
  {
    id: 1,
    image: "/images/user.webp",
    text: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing ”`,
    name: "Customer Name",
    city: "City name",
  },
  {
    id: 2,
    image: "/images/user.webp",
    text: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing ”`,
    name: "Customer Name",
    city: "City name",
  },
  {
    id: 3,
    image: "/images/user.webp",
    text: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing ”`,
    name: "Customer Name",
    city: "City name",
  },
  {
    id: 4,
    image: "/images/user.webp",
    text: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing ”`,
    name: "Customer Name",
    city: "City name",
  },
];

const Testimonials = () => {
  return (
    <section className={`${styles.testimonials} paddingBlock`}>
      <div className={`${styles.pattern} ${styles.patternTop}`}>
        <Image
          src="/images/pattern-top.png"
          alt="prev"
          width={328}
          height={164}
        />
      </div>
      <div className="container">
        {/* Title */}
        <div className={`title ${styles.testimonialsTitle}`}>
          <p>Testimonials</p>
          <h2>Experiences That Guests Love And Remember</h2>
        </div>

        {/* Slider */}
        <div className={styles.testimonialSliderWrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation={{
              prevEl: ".testimonialPrev",
              nextEl: ".testimonialNext",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                spaceBetween: 20,
              },
               1600: {
                spaceBetween: 30,
              },
            }}
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={90}
                      height={90}
                    />
                  </div>

                  <p className={styles.testimonialText}>{item.text}</p>

                  <div className={styles.testimonialBottom}>
                    <span className={styles.name}>{item.name}</span>
                    <p>{item.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className={styles.testimonialNav}>
            <button className="testimonialPrev">
              <Image
                src="/images/left-arrow.svg"
                alt="prev"
                width={16}
                height={16}
              />
            </button>

            <button className="testimonialNext">
              <Image
                src="/images/right-arrow.svg"
                alt="prev"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.pattern} ${styles.patternBottom}`}>
        <Image src="/images/pattern.png" alt="prev" width={328} height={164} />
      </div>
    </section>
  );
};

export default Testimonials;
