import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <div className={styles.footerLeft}>
            <Link href="/" className={styles.footerLogo}>
              <Image
                src="/images/footer-logo.svg"
                alt="Logo"
                width={198}
                height={60}
              />
            </Link>

            <p>
              Lorem ipsum dolor sit amet consectetur. Et diam sit sagittis eget
              eget magna arcu nisl. Scelerisque lobortis augue mauris nulla
              vitae mattis praesent placerat. Pharetra elementum mus ornare
              cursus pretium vel.
            </p>

            <div className={styles.socialIcons}>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="Linkedin"
                  width={32}
                  height={32}
                />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/xtwitter.svg"
                  alt="X Twitter"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>

          {/* Footer Menus */}
          <div className={styles.footerMenus}>
            {/* Menu 1 */}
            <div className={styles.footerCol}>
              <h4>Our Collections</h4>

              <ul>
                <li>
                  <Link href="#">Premium Villas</Link>
                </li>

                <li>
                  <Link href="#">Exclusive Estates</Link>
                </li>

                <li>
                  <Link href="#">Luxury Stays</Link>
                </li>

                <li>
                  <Link href="#">Holiday Homes</Link>
                </li>

                <li>
                  <Link href="#">Corporate Places</Link>
                </li>
              </ul>
            </div>

            {/* Menu 2 */}
            <div className={styles.footerCol}>
              <h4>Useful Links</h4>

              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>

                <li>
                  <Link href="#">Experiences</Link>
                </li>

                <li>
                  <Link href="#">Services</Link>
                </li>

                <li>
                  <Link href="#">Gallery</Link>
                </li>

                <li>
                  <Link href="#">Blogs</Link>
                </li>

                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>

            {/* Menu 3 */}
            <div className={styles.footerCol}>
              <h4>Other Links</h4>

              <ul>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>

                <li>
                  <Link href="#">Refund Policy</Link>
                </li>

                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>

                <li>
                  <Link href="#">Other Conditions</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.footerCol}>
              <h4>Contact Us</h4>

              <ul>
                <li>
                  <a href="tel:+918963289632">+91 89632 89632</a>
                </li>

                <li>
                  <a href="mailto:contact@blissora.com">contact@blissora.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>All Rights Reserved by Blissora Stays</p>

          <p>
            Created by: <span>Morphic IT Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
