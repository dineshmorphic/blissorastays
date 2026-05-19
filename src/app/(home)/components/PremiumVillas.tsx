'use client'
import React, { useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import VillaCard from "../../../../components/VillaCard";


const filters = ["All", "Udaipur", "Jaipur", "Mumbai", "Nasik"];

const villas = [
  {
    id: 1,
    imgs: [
      "/images/card-img.webp",
      "/images/card-img.webp",
      "/images/card-img.webp",
      "/images/card-img.webp",
    ],
    rating: "4.3",
    title: "Villa Aurelia",
    address: "Sindhubhavan, Ahmedabad",
    bedrooms: 5,
    bathrooms: 4,
    guests: 12,
    price: "₹24,553",
    priceLabel: "per night + taxes",
    category: "Udaipur",
  },

  {
    id: 2,
    imgs: [
      "/images/card-img.webp",
      "/images/card-img.webp",
      "/images/card-img.webp",
      "/images/card-img.webp",
    ],
    rating: "4.3",
    title: "Villa Aurelia",
    address: "Sindhubhavan, Ahmedabad",
    bedrooms: 5,
    bathrooms: 4,
    guests: 12,
    price: "₹24,553",
    priceLabel: "per night + taxes",
    category: "Jaipur",
  },
];

const PremiumVillas = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? villas
    : villas.filter(v => v.category === activeFilter);

  return (
    <section className={`${styles.premiumVillas} paddingBlock`}>
      <div className="container">

        {/* Title */}
        <div className={`title ${styles.sectionTitle}`}>
          <p>Premium Villas</p>
          <h2>Premium Villas Offering World Class Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget
            eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae
            mattis praesent placerat. Pharetra elementum mus ornare cursus pretium vel.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterRow}>
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {filtered.map(villa => (
           <VillaCard
  key={villa.id}
  imgs={villa.imgs}
  rating={villa.rating}
  title={villa.title}
  address={villa.address}
  bedrooms={villa.bedrooms}
  bathrooms={villa.bathrooms}
  guests={villa.guests}
  price={villa.price}
  priceLabel={villa.priceLabel}
/>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumVillas;