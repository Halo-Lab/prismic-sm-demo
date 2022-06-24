import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
const BlogHero = ({ postData }) => {
  const { title, subtitle, slug, mainImage } = postData;

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <ButtonPrimary
              buttonLink={`blog/${slug.current}`}
              mod="button--regular"
              Icon={ArrowIcon}
            />
          </div>
          <div className={styles.heroImage}>
            <img
              className="heroImg"
              src={''}
              alt={(mainImage.alt = "post Image")}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
