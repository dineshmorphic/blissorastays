"use client";

import React, { useState } from "react";
import styles from "./Listing.module.css";
import Image from 'next/image'

const ListingSorting = ({ count = 12, location = "Ahmedabad" }) => {
  const [sortOption, setSortOption] = useState("Most Loved");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortOptions = [
    "Most Loved",
    "Price: Low to High",
    "Price: High to Low",
    "Top Rated",
    "Newest First",
  ];

  return (
    <div className={styles.sortingBar}>
      <h3 className={styles.resultTitle}>
        {count} Villas in {location}
      </h3>

      <div className={styles.sortingRight}>
        {/* Sort Dropdown */}
        <div className={styles.sortDropdownWrapper}>
          <button
            className={styles.sortDropdown}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className={styles.sortLabel}>Sort by</span>
            <span className={styles.sortDivider}>|</span>
            <span className={styles.sortValue}>{sortOption}</span>
            
             <Image
          src="/images/arrow-down.svg"
          alt="expand"
          width={12}
          height={6}
           className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
        />
          </button>

          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {sortOptions.map((opt) => (
                <li
                  key={opt}
                  className={`${styles.dropdownItem} ${
                    sortOption === opt ? styles.dropdownItemActive : ""
                  }`}
                  onClick={() => {
                    setSortOption(opt);
                    setDropdownOpen(false);
                  }}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* View toggle */}
        <div className={styles.viewToggle}>
          {/* Grid icon */}
          <button
            className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
            onClick={() => setViewMode("grid")}
            title="Grid view"
          >
            <svg width="24" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="11" y="1" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="1" y="11" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" />
            </svg>
          </button>

          {/* List icon */}
          <button
            className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewBtnActive : ""}`}
            onClick={() => setViewMode("list")}
            title="List view"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="2" width="16" height="2.5" rx="1.25" fill="currentColor" />
              <rect x="1" y="7.75" width="16" height="2.5" rx="1.25" fill="currentColor" />
              <rect x="1" y="13.5" width="16" height="2.5" rx="1.25" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingSorting;