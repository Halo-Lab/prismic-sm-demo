import React from "react";
import styles from "./Social.module.scss";

const Social = ({ footerSocialsArr }) => {
  const socialLinks = footerSocialsArr.map((item, index) => {
    const { socialIcon, socialLink, socialTitle } = item;

    return (
      <li className={styles.socialItem} key={index}>
        <a href={socialLink.current}>
          <img
            className={styles.socialIcon}
            loading="lazy"
            src={''}
            alt={socialTitle}
          />
        </a>
      </li>
    );
  });

  return <ul className={styles.social}>{socialLinks}</ul>;
};
export default Social;
