import React from "react";
import styles from "./Social.module.scss";

const Social = ({ footerSocialsArr }) => {
  const socialLinks = footerSocialsArr.map((item, index) => {
    const { footerSocialLogo, footerSocialLink } = item;

    return (
      <li className={styles.socialItem} key={index}>
        <a href={footerSocialLink}>
          <img
            className={styles.socialIcon}
            loading="lazy"
            src={footerSocialLogo.url}
            alt={footerSocialLogo.alt}
          />
        </a>
      </li>
    );
  });

  return <ul className={styles.social}>{socialLinks}</ul>;
};
export default Social;
