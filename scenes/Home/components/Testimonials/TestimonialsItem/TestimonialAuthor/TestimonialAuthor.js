import React from "react";

import styles from "./TestimonialAuthor.module.scss";

const TestimonialAuthor = ({ name, position, avatarImg, avatarAlt }) => {
  return (
    <div className={styles.testimonialAuthor}>
      <div className={styles.testimonialAuthorImg}>
        <img src={''} className={styles.img} alt={avatarAlt} />
      </div>
      <div className={styles.testimonialAuthorInfo}>
        <span className={styles.testimonialAuthorName}>{name}</span>
        <span className={styles.testimonialAuthorPosition}>{position}</span>
      </div>
    </div>
  );
};

export default TestimonialAuthor;
