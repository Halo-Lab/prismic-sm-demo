import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import Social from "../Social/Social";

const Footer = ({ data }) => {
  const { items, primary } = data;
  const { footerSocialLogo } = items;
  const { footerLogo, footerText, footerHaloText, footerHaloLogo } = primary;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <Link href="/">
            <a>
              <img className="logo" src={footerLogo.url} />
            </a>
          </Link>
          <Social footerSocialsArr={items} />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span className={styles.copyrightText}>{footerText}</span>
            <div className={styles.copyrightCompany}>
              <div className={styles.copyrightCompanyImg}>
                <img src={footerHaloLogo.url} alt="Halo Lab icon" />
              </div>
              <span className={styles.copyrightCompanyName}>
                Made in&nbsp;
                <span className={styles.copyrightCompanyNameBold}>
                  {footerHaloText}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
