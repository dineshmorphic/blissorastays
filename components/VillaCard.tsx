'use client'
import React from "react";
import styles from "./VillaCard.module.css";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface VillaCardProps {
  imgs: string[];
  rating: string;
  title: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: string;
  priceLabel: string;
}

const VillaCard = ({
  imgs,
  rating,
  title,
  address,
  bedrooms,
  bathrooms,
  guests,
  price,
  priceLabel,
}: VillaCardProps) => {
  return (
    <div className={styles.card}>

      {/* Card Image Slider */}
      <div className={styles.cardImg}>

        {/* Rating + Like — floats above swiper */}
        <div className={styles.cardImgTop}>
          <div className={styles.cardRating}>
            <Image src="/images/star.svg" alt="star" width={13} height={13} />
            <span>{rating}</span>
          </div>
          <button className={styles.cardLike} aria-label="Add to wishlist">
            <Image src="/images/like.svg" alt="like" width={16} height={16} />
          </button>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={false}
          className={styles.swiper}
        >
          {imgs.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`${title} - ${i + 1}`}
                width={488}
                height={488}
                className={styles.cardImgEl}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{title}</h3>

        <div className={styles.cardAddress}>
          <Image src="/images/map.svg" alt="location" width={25} height={24} />
          <p>{address}</p>
        </div>

        <div className={styles.cardAmenities}>
          <span className={styles.pill}>{bedrooms} Beds</span>
          <span className={styles.pill}>{bathrooms} Baths</span>
          <span className={styles.pill}>{guests} Guests</span>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardPrice}>
            <h5>{price}</h5>
            <p>{priceLabel}</p>
          </div>
          <Link href="/login" className={styles.cardArrow}>
            <Image src="/images/right-arrow.svg" alt="View" width={12} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;