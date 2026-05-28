"use client";


import React, { useState } from "react";
import styles from "./Listing.module.css";
import VillaCard from "../../../../components/VillaCard";
import ListingFilter from "./Listingfilter";
import ListingSorting from "./Listingsorting";
import SearchBox from "../../../../components/searchbox/Searchbox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const Listing = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const villas = [
    {
      id: 1,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Udaipur",
    },
    {
      id: 2,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Jaipur",
    },
    {
      id: 3,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Mumbai",
    },
    {
      id: 4,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Mumbai",
    },
    {
      id: 5,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Mumbai",
    },
    {
      id: 6,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Mumbai",
    },
    {
      id: 7,
      imgs: ["/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp", "/images/card-img.webp"],
      rating: "4.3", title: "Villa Aurelia", address: "Sindhubhavan, Ahmedabad",
      bedrooms: 5, bathrooms: 4, guests: 12, price: "₹24,553", priceLabel: "per night + taxes", category: "Mumbai",
    },
  ];

  const totalPages = Math.ceil(villas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVillas = villas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={`${styles.Listing} paddingBlock`}>
        <div className="container">
          <div className={styles.searchBoxShadow}>
            <SearchBox />
          </div>
          <div className={styles.listingRow}>
            <div className={styles.listingFilter}>
              <ListingFilter />
            </div>
            <div className={styles.listingCol}>
              <div className={styles.listingShorting}>
                <ListingSorting count={villas.length} location="Ahmedabad" />
              </div>
              <div className={styles.listingGrid}>
                {currentVillas.map((villa) => (
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

              {/* Pagination */}
              {totalPages > 1 && (
  <div className={styles.pagination}>
    
    {/* Prev Button */}
    <button
      className={`${styles.pageBtn} ${styles.pageBtnNav} ${
        currentPage === 1 ? styles.disabled : ""
      }`}
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label="Previous page"
    >
      <FaChevronLeft />
    </button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        className={`${styles.pageBtn} ${
          currentPage === page ? styles.pageBtnActive : ""
        }`}
        onClick={() => handlePageChange(page)}
        aria-label={`Page ${page}`}
        aria-current={currentPage === page ? "page" : undefined}
      >
        {page}
      </button>
    ))}

    {/* Next Button */}
    <button
      className={`${styles.pageBtn} ${styles.pageBtnNav} ${
        currentPage === totalPages ? styles.disabled : ""
      }`}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label="Next page"
    >
      <FaChevronRight />
    </button>
  </div>
)}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;