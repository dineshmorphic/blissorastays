"use client";

import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const cities = [
  {
    name: "Ahmedabad",
    image: "/images/ahmedabad.svg",
  },
  {
    name: "Udaipur",
    image: "/images/mumbai.svg",
  },
  {
    name: "Jaipur",
    image: "/images/delhi.svg",
  },
  {
    name: "Mumbai",
    image: "/images/surat.svg",
  },
  {
    name: "Nasik",
    image: "/images/pune.svg",
  },
  {
    name: "Ahmedabad",
    image: "/images/ahmedabad.svg",
  },
];

const City = () => {
  return (
    <section className={`${styles.city} paddingBlock`}>
      <div className="container">
        <div className={styles.cityTop}>
          {/* Navigation Buttons */}
          <div className={styles.cityNavigation}>
            <button className={styles.prevBtn}>
              <Image
                src="/images/left-arrow.svg"
                alt="Previous"
                width={12}
                height={6}
              />
            </button>

            <button className={styles.nextBtn}>
              <Image
                src="/images/right-arrow.svg"
                alt="Next"
                width={12}
                height={6}
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1440: {
              spaceBetween:16,
            },
            1600: {
              spaceBetween:20,
            },
            1800: {
              spaceBetween:30,
            },
             1900: {
              spaceBetween:40,
            },
          }}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cityContent}>
                <Image
                  src={city.image}
                  alt={city.name}
                  width={80}
                  height={80}
                />

                <p>{city.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default City;
