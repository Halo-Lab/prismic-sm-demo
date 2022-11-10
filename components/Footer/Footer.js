import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import Social from "../Social/Social";

const Footer = ({ data }) => {
  const { items, primary } = data;
  const { footerLogo, footerText, footerHaloText, footerHaloLogo } = primary;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <Link href="/">
            <Image src={footerLogo.url} alt={footerLogo.alt} width="192px" height="32px" layout="fixed" />
          </Link>
          <Social footerSocialsArr={items} />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span className={styles.copyrightText}>{footerText}</span>
            <a href="https://www.halo-lab.com/" className={styles.copyrightCompany}>
              <div className={styles.copyrightCompanyImg}>
              <Image src={footerHaloLogo.url} alt={footerHaloLogo.alt} width="20px" height="20px" layout="fixed" />  
              </div>
              <span className={styles.copyrightCompanyName}>
                Made in&nbsp;
                <span className={styles.copyrightCompanyNameBold}>
                  {footerHaloText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
