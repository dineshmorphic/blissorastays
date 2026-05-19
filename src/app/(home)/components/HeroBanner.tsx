'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './Home.module.css'

const destinations = [
  'Goa, India',
  'Kerala, India',
  'Rajasthan, India',
  'Coorg, India',
  'Manali, India',
  'Ooty, India',
]

const guestOptions = [
  '2 Guests | 1 Room',
  '4 Guests | 1 Room',
  '6 Guests | 2 Rooms',
  '8 Guests | 3 Rooms',
  '10 Guests | 4 Rooms',
]

const HeroBanner = () => {

  // Destination
  const [destOpen, setDestOpen]       = useState(false)
  const [destination, setDestination] = useState('')
  const destRef = useRef<HTMLDivElement>(null)

  // Date
  const [checkIn,  setCheckIn]  = useState('')
  const [checkOut, setCheckOut] = useState('')
  const checkInRef  = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)

  // Guests
  const [guestOpen, setGuestOpen]   = useState(false)
  const [guestVal,  setGuestVal]    = useState('6 Guests | 2 Rooms')
  const guestRef = useRef<HTMLDivElement>(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (destRef.current  && !destRef.current.contains(e.target as Node))  setDestOpen(false)
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) setGuestOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Format date display  dd/mm/yyyy
  const formatDate = (val: string) => {
    if (!val) return ''
    const [y, m, d] = val.split('-')
    return `${d}/${m}/${y}`
  }

  const dateDisplay = checkIn || checkOut
    ? `${formatDate(checkIn) || '--/--/----'}  |  ${formatDate(checkOut) || '--/--/----'}`
    : ''

  return (
    <>
      <section className={styles.heroBanner}>

        <div className={styles.overlay} />

        <div className="container">

          {/* Hero Content */}
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
            <p className={styles.desc}>Welcome to Blissora</p>
            <h1>Live the Extraordinary</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget
              eget magna arcu nisl. Scelerisque lobortis augue mauris nulla vitae orci ipsum.
            </p>
          </div>
          </div>

          
          <div className={styles.searchBox}>

           
            <div
              className={`${styles.searchItem} ${destOpen ? styles.active : ''}`}
              ref={destRef}
              onClick={() => setDestOpen(v => !v)}
            >
              <Image
                src="/images/map.svg"
                alt="location"
                width={24}
                height={24}
                className={styles.searchIcon}
              />
              <span className={`${styles.fieldValue} ${!destination ? styles.placeholder : ''}`}>
                {destination || 'Select Destination'}
              </span>
              <Image
                src="/images/arrow-down.svg"
                alt="expand"
                width={12}
                height={6}
                className={`${styles.chevronIcon} ${destOpen ? styles.rotate : ''}`}
              />

             
              {destOpen && (
                <div className={styles.dropdown} onClick={e => e.stopPropagation()}>
                  {destinations.map(d => (
                    <div
                      key={d}
                      className={`${styles.dropdownItem} ${destination === d ? styles.selected : ''}`}
                      onClick={() => { setDestination(d); setDestOpen(false) }}
                    >
                      
                      {d}
                    </div>
                  ))}
                </div>
              )}
            </div>

            
            <div className={styles.searchItem} onClick={() => checkInRef.current?.showPicker?.()}>
              <Image
                src="/images/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
                className={styles.searchIcon}
              />
              <span className={`${styles.fieldValue} ${!dateDisplay ? styles.placeholder : ''}`}>
                {dateDisplay || '--/--/----  |  --/--/----'}
              </span>

             
              <input
                ref={checkInRef}
                type="date"
                className={styles.hiddenDate}
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                onClick={e => e.stopPropagation()}
              />
              <input
                ref={checkOutRef}
                type="date"
                className={styles.hiddenDate}
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                onClick={e => e.stopPropagation()}
                style={{ marginLeft: '-60px' }}
              />
            </div>

            
            <div
              className={`${styles.searchItem} ${guestOpen ? styles.active : ''}`}
              ref={guestRef}
              onClick={() => setGuestOpen(v => !v)}
            >
              <Image
                src="/images/users.svg"
                alt="guests"
                width={20}
                height={20}
                className={styles.searchIcon}
              />
              <span className={styles.fieldValue}>
                {guestVal}
              </span>
              <Image
                src="/images/arrow-down.svg"
                alt="expand"
                width={14}
                height={14}
                className={`${styles.chevronIcon} ${guestOpen ? styles.rotate : ''}`}
              />

           
              {guestOpen && (
                <div className={styles.dropdown} onClick={e => e.stopPropagation()}>
                  {guestOptions.map(g => (
                    <div
                      key={g}
                      className={`${styles.dropdownItem} ${guestVal === g ? styles.selected : ''}`}
                      onClick={() => { setGuestVal(g); setGuestOpen(false) }}
                    >
                      
                      {g}
                    </div>
                  ))}
                </div>
              )}
            </div>

           
            <button className={styles.searchBtn}>
              <Image
                src="/images/search.svg"
                alt="search"
                width={24}
                height={24}
                className={styles.searchBtnIcon}
              />
              SEARCH
            </button>

          </div>
         

        </div>
      </section>
    </>
  )
}

export default HeroBanner