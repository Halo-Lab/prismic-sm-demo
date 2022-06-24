import s from "./MobileApp.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import MobileAppFunction from "./MobileAppFunction/MobileAppFunction";
import classnames from "classnames";

const MobileApp = ({ mobileApp }) => {
  const {
    buttonText,
    category,
    description,
    mobileAppImage,
    mobileAppArr,
    title,
  } = mobileApp;
  const mobileAppFunctions = mobileAppArr.map((item, index) => {
    return <MobileAppFunction data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className="container">
        <div className={s.mobileApp}>
          <div className={s.mobileAppContent}>
            <div className={s.mobileAppLeft}>
              <div
                className={classnames(
                  `content-section content-section--green content-section--inner`
                )}
              >
                <div className="content-section__inner">
                  <div className={s.MobileAppFunctions}>
                    {mobileAppFunctions}
                  </div>
                  <img
                    className={s.mobileAppImg}
                    src={''}
                    alt={category}
                  />
                </div>
              </div>
            </div>
            <div className={s.mobileAppInfo}>
              <span className="section-category section-category--inner">
                {category}
              </span>
              <h3 className="section-title section-title--inner">{title}</h3>
              <p className={s.mobileAppDesc}>{description}</p>
              <div className={s.mobileAppFooter}>
                <ButtonPrimary buttonText={buttonText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
