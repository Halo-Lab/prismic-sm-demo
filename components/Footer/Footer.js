import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import Social from "../Social/Social";

const Footer = ({ LayoutData }) => {
  const { footerCopyrightsObj, footerLogo, footerSocialsArr } = LayoutData;
  const { companyLogo, companyName, footerCopyrights } = footerCopyrightsObj;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <Link href="/">
            <a>
              <img className="logo" src={''} />
            </a>
          </Link>
          <Social footerSocialsArr={footerSocialsArr} />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span className={styles.copyrightText}>{footerCopyrights}</span>
            <div className={styles.copyrightCompany}>
              <div className={styles.copyrightCompanyImg}>
                <img src={urlFor(companyLogo)} alt="Halo Lab icon" />
              </div>
              <span className={styles.copyrightCompanyName}>
                Made in&nbsp;
                <span className={styles.copyrightCompanyNameBold}>
                  {companyName}
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
