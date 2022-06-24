import styles from "./Conversion.module.scss";
import classNames from "classnames";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import ReplyIcon from "../../../../assets/ReplyIcon/ReplyIcon";
import ButtonSend from "../../../../components/Buttons/ButtonSend/ButtonSend";

const Conversion = ({ conversion }) => {
  const {
    title,
    backgroundImage,
    description,
    inputText,
    mainImage,
    stickerObj,
  } = conversion;

  return (
    <div className="section section--conversion">
      <div className="container">
        <div className="content-section content-section--blue">
          <div className="content-section__inner content-section__inner--padding-none">
            <div
              className={styles.conversion}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className={styles.conversionContent}>
                <div className={styles.conversionInfo}>
                  <h3 className="section-title section-title--inner">
                    {title}
                  </h3>
                  <p className={styles.conversionDesc}>{description}</p>
                </div>
                <form className={styles.conversionForm}>
                  <div
                    className={classNames("input", styles.conversionFormInput)}
                  >
                    <input
                      type="email"
                      className="input-item input-item--padding-right"
                      placeholder={inputText}
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
                  <img
                    src={''}
                    className={styles.stickerImg}
                    alt={stickerObj.stickerTitle}
                  />
                  <span className={styles.conversionReplyText}>
                    {stickerObj.stickerTitle}
                  </span>
                </div>
                <img src={''} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
