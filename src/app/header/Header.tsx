"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top on page refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${sticky ? styles.active : ""}`}
    >
      <div className="container">
        <div className={styles.navbar}>
          {/* LOGO */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Blissora Logo"
                width={198}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* MENU */}
          <div
            className={`${styles.menu} ${
              menuOpen ? styles.showMenu : ""
            }`}
          >
            {/* CROSS BUTTON */}
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
            >
              <span></span>
              <span></span>
            </button>

            <nav className={styles.navMenu}>
              <ul>
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Villas
                  </a>
                </li>

                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Experiences
                  </a>
                </li>

                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Events
                  </a>
                </li>

                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Our Story
                  </a>
                </li>

                <li>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* BUTTON */}
            <div className={styles.authBtn}>
              <Link href="/login">LOG IN | SIGN UP</Link>
            </div>
          </div>

          {/* TOGGLE */}
          <button
            className={styles.toggleBtn}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;