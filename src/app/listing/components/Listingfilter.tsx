"use client";

import React, { useState } from "react";
import styles from "./Listing.module.css";

type AmenityKey = "pureVeg" | "highSpeedWifi" | "petFriendly" | "poolJacuzzi" | "bestRated";
type AmenitiesState = Record<AmenityKey, boolean>;

const ListingFilter = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([40000, 50000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([5]);
  const [amenities, setAmenities] = useState<AmenitiesState>({
    pureVeg: false,
    highSpeedWifi: false,
    petFriendly: false,
    poolJacuzzi: false,
    bestRated: false,
  });

  const bedroomOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const toggleBedroom = (num: number): void => {
    setSelectedBedrooms((prev) =>
      prev.includes(num) ? prev.filter((b) => b !== num) : [...prev, num]
    );
  };

  const toggleAmenity = (key: AmenityKey): void => {
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = Math.min(Number(e.target.value), priceRange[1] - 1000);
    setPriceRange([val, priceRange[1]]);
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = Math.max(Number(e.target.value), priceRange[0] + 1000);
    setPriceRange([priceRange[0], val]);
  };

  const minPct = ((priceRange[0] - 10000) / (100000 - 10000)) * 100;
  const maxPct = ((priceRange[1] - 10000) / (100000 - 10000)) * 100;

  const amenityList: { key: AmenityKey; label: string }[] = [
    { key: "pureVeg", label: "Pure Veg" },
    { key: "highSpeedWifi", label: "High Speed WiFi" },
    { key: "petFriendly", label: "Pet Friendly" },
    { key: "poolJacuzzi", label: "Pool / Jacuzzi" },
    { key: "bestRated", label: "Best Rated" },
  ];

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterHeader}>
        <h4 className={styles.filterTitle}>Filters</h4>
        <button className={styles.clearAll}>Clear All</button>
      </div>

     

      {/* Price Range */}
      <div className={styles.filterSection}>
        <h6 className={styles.sectionTitle}>Prices Range</h6>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}>
            <div
              className={styles.sliderFill}
              style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
            />
            <input
              type="range"
              min={10000}
              max={100000}
              step={1000}
              value={priceRange[0]}
              onChange={handleMinPrice}
              className={`${styles.rangeInput} ${styles.rangeMin}`}
            />
            <input
              type="range"
              min={10000}
              max={100000}
              step={1000}
              value={priceRange[1]}
              onChange={handleMaxPrice}
              className={`${styles.rangeInput} ${styles.rangeMax}`}
            />
          </div>
        </div>
        <div className={styles.priceInputs}>
          <div className={styles.priceBox}>
            <span className={styles.rupee}>₹</span>
            <input
              type="text"
              value={priceRange[0].toLocaleString("en-IN")}
              
              className={styles.priceInput}
            />
          </div>
          <div className={styles.priceBox}>
            <span className={styles.rupee}>₹</span>
            <input
              type="text"
              value={priceRange[1].toLocaleString("en-IN")}
              
              className={styles.priceInput}
            />
          </div>
        </div>
      </div>

      

      {/* Bedrooms */}
      <div className={styles.filterSection}>
        <h6 className={styles.sectionTitle}>Bedrooms</h6>
        <div className={styles.bedroomGrid}>
          {bedroomOptions.map((num) => (
            <button
              key={num}
              className={`${styles.bedroomBtn} ${
                selectedBedrooms.includes(num) ? styles.bedroomActive : ""
              }`}
              onClick={() => toggleBedroom(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* Amenities */}
      <div className={styles.filterSection}>
        <h6 className={styles.sectionTitle}>Amenities</h6>
        <div className={styles.amenitiesList}>
          {amenityList.map(({ key, label }) => (
            <label key={key} className={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={amenities[key]}
                onChange={() => toggleAmenity(key)}
                className={styles.checkboxInput}
              />
              <span className={styles.customCheckbox}>
                {amenities[key] && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className={styles.checkboxLabel}>{label}</span>
            </label>
          ))}
        </div>
        <button className={styles.seeAll}>See All</button>
      </div>
    </div>
  );
};

export default ListingFilter;