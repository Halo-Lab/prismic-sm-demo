import Image from 'next/image';

import styles from "./TestimonialAuthor.module.scss";

const TestimonialAuthor = ({ name, position, avatarImg, avatarAlt }) => {
  return (
    <div className={styles.testimonialAuthor}>
      <div className={styles.testimonialAuthorImg}>
        <Image src={avatarImg.url} className={styles.img} alt={avatarAlt} width="64px" height="64px" layout="fixed"/>
      </div>
      <div className={styles.testimonialAuthorInfo}>
        <span className={styles.testimonialAuthorName}>{name}</span>
        <span className={styles.testimonialAuthorPosition}>{position}</span>
      </div>
    </div>
  );
};

export default TestimonialAuthor;
