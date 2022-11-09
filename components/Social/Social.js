import Image from "next/legacy/image";

import styles from "./Social.module.scss";

const Social = ({ footerSocialsArr }) => {
  const socialLinks = footerSocialsArr.map((item, index) => {
    const { footerSocialLogo, footerSocialLink } = item;

    return (
      <li className={styles.socialItem} key={index}>
        <a href={footerSocialLink} className={styles.socialLink}>
          <Image src={footerSocialLogo.url} className={styles.socialIcon} alt={footerSocialLogo.alt} width="24px" height="24px" layout="fixed" />
        </a>
      </li>
    );
  });

  return <ul className={styles.social}>{socialLinks}</ul>;
};
export default Social;
