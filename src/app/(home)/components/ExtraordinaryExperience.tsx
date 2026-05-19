'use client'
import React, { useRef } from 'react'
import styles from './Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const slides = [
  {
    id: 1,
    icon: '/images/approach.svg',
    title: 'Sustainable Approach',
    desc: 'Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra elementum mus ornare cursus pretium vel.',
  },
  {
    id: 2,
    icon: '/images/experience-icon-2.svg',
    title: 'Luxury Redefined',
    desc: 'Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra elementum mus ornare cursus pretium vel.',
  },
  {
    id: 3,
    icon: '/images/experience-icon-3.svg',
    title: 'Curated Experiences',
    desc: 'Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra elementum mus ornare cursus pretium vel.',
  },
  {
    id: 4,
    icon: '/images/experience-icon-4.svg',
    title: 'World Class Service',
    desc: 'Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra elementum mus ornare cursus pretium vel.',
  },
]

const ExtraordinaryExperience = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className={`${styles.extraordinaryExperience} paddingBlock`}>
      <div className="container">

        <div className={`title ${styles.expSectionTitle}`}>
          <p>Extraordinary Experience</p>
          <h2>More Than A Stay, A Lifestyle Experience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget eget magna arcu nisl.
            Scelerisque lobortis augue mauris nulla vitae mattis praesent placerat. Pharetra
            elementum mus ornare cursus pretium vel.
          </p>
        </div>

        <div className={styles.expRow}>

          <div className={styles.expImgWrap}>
            <Image
              src="/images/extraordinary-experience.webp"
              alt="Extraordinary Experience"
              fill
              className={styles.expImg}
            />
          </div>

          <div className={styles.expSliderWrap}>
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper }}
              slidesPerView={1}
              loop={true}
              className={styles.expSwiper}
            >
              {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.expSlide}>
                    <div className={styles.expIcon}>
                      <Image
                        src={slide.icon}
                        alt={slide.title}
                        width={68}
                        height={34}
                      />
                    </div>
                    <h3 className={styles.expSlideTitle}>{slide.title}</h3>
                    <p className={styles.expSlideDesc}>{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.expNav}>
              <button
                className={styles.expPrevBtn}
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
              >
                <Image src="/images/left-arrow.svg" alt="prev" width={16} height={16} />
              </button>
              <button
                className={styles.expNextBtn}
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
              >
                <Image src="/images/right-arrow.svg" alt="next" width={16} height={16} />
              </button>
            </div>
          </div>

        </div>

        <div className={styles.expCta}>
          <Link href="/services" className={styles.expCtaBtn}>
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ExtraordinaryExperience