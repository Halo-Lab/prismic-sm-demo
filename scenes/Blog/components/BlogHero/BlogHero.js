import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription'

const BlogHero = ({ data }) => {
  const {primary} = data;
  const { blogHeroTitle, blogHeroText, blogHeroLinkHref, blogHeroImage } = primary;

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{blogHeroTitle}</h1>
            <p className={styles.heroSubtitle}>
              {cutDescription(blogHeroText[0].text, 189)}
            </p>
            <ButtonPrimary
              buttonLink={`/blog/${blogHeroLinkHref}`}
              mod="button--regular"
              Icon={ArrowIcon}
            />
          </div>
          <div className={styles.heroImage}>
            <img
              className="heroImg"
              src={blogHeroImage.url}
              alt={''}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
