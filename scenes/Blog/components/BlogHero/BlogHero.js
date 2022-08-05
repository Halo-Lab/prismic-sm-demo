import Image from 'next/image';

import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription'

const BlogHero = ({ data }) => {  
  const {items} = data;
  const { latestPostsImage, latestPostsTitle, latestPostsText, latestPostsLink } = items[0];

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{latestPostsTitle}</h1>
            <p className={styles.heroSubtitle}>
              {cutDescription(latestPostsText[0].text, 189)}
            </p>
            <ButtonPrimary
              buttonLink={`/blog/${latestPostsLink}`}
              mod="button--regular"
              Icon={ArrowIcon}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image src={latestPostsImage.url} className={styles.image} alt={latestPostsImage.alt} layout="fill" priority /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
