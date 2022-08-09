import Image from 'next/image';

import s from "./Hero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonWithArrow from "../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";

const Hero = ({ data }) => {
  const { primary } = data;
  const {heroTitle, heroText, heroButton, heroButtonHref, heroLink, heroLinkHref, heroImage, herovideo} = primary;

  console.log(herovideo.url)

  return (
    <div className="section">
      <div className={s.hero}>
        <div className={s.container}>
          <section className="container">
            <div className={s.heroContent}>
              <div className={s.heroInfo}>
                <h1 className={s.heroTitle}>{heroTitle}</h1>
                <p className={s.heroDesc}>{heroText}</p>
                <div className={s.heroFooter}>
                  <ButtonPrimary
                    buttonText={heroButton}
                    buttonLink={heroButtonHref}
                  />
                  <ButtonWithArrow
                    buttonText={heroLink}
                    buttonLink={heroLinkHref}
                  />
                </div>
              </div>
              <div className={s.video}>
              <div className={s.heroImageContainer}>
                <video controls src={herovideo.url} poster={heroImage.url} /> 
              </div> 
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
