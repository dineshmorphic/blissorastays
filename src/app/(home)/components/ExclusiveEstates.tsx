import React from 'react'
import styles from './Home.module.css'
import VillaCard from '../../../../components/VillaCard'

const ExclusiveEstates = () => {

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

  {
    id: 3,
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
    category: "Mumbai",
  },
]

  return (
    <section className={`${styles.exclusiveEstates} paddingBlock`}>
      <div className="container">

        <div className={`title ${styles.exclusiveEstatesTitle}`}>
          <p>Exclusive Estates Near You</p>

          <h2>
            The Finest Selection Of Luxury Residences
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra elementum mus ornare cursus  pretium vel.
          </p>
        </div>

        <div className={styles.exclusiveEstatesRow}>

          {villas.map((villa) => (
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
  )
}

export default ExclusiveEstates