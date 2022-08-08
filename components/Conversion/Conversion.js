import Image from 'next/image';
import classNames from "classnames";

import styles from "./Conversion.module.scss";
import ArrowIcon from "../../assets/ArrowIcon/ArrowIcon";
import ReplyIcon from "../../assets/ReplyIcon/ReplyIcon";
import ButtonSend from "../Buttons/ButtonSend/ButtonSend";

const Conversion = ({ data }) => {

  if(!data) return;
  const { primary } = data;  
  const { conversionSubTitle, conversionTrial, conversionPlaceholder, conversionImage, conversionTagline, conversionTaglineLogo } = primary;

  return (
    <div className="section section--conversion">
      <div className="container">
        <div className="content-section content-section--blue">
          <div className="content-section__inner content-section__inner--padding-none">
            <div className={styles.conversion}>
              <div className={styles.conversionContent}>
                <div className={styles.conversionInfo}>
                  <h3 className="section-title section-title--inner">
                    {conversionSubTitle}
                  </h3>
                  <p className={styles.conversionDesc}>{conversionTrial}</p>
                </div>
                <form className={styles.conversionForm}>
                  <div
                    className={classNames("input", styles.conversionFormInput)}
                  >
                    <input
                      type="email"
                      className="input-item input-item--padding-right"
                      placeholder={conversionPlaceholder}
                    />
                    <ButtonSend Icon={ArrowIcon} mod="button--send" />
                  </div>
                </form>
              </div>
              <div className={styles.conversionImg}>
                <div className={styles.conversionReply}>
                  <div className={styles.conversionReplyIcon}>
                    <ReplyIcon />
                  </div>
                  <Image src={conversionTaglineLogo.url} className={styles.stickerImg} alt={conversionTagline} width="32px" height="32px" layout="fixed"/>      
                  <span className={styles.conversionReplyText}>
                    {conversionTagline}
                  </span>
                </div>
                <div className={styles.conversionImageContainer}>
                  <Image src={conversionImage.url} className={styles.conversionImage} alt={conversionImage.alt} layout="fill" priority /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
