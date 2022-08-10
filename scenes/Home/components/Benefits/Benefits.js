import s from "./Benefits.module.scss";
import { useState } from "react";
import BenefitsItem from "./BenefitsItem/BenefitsItem";
import SecondArrowIcon from "../../../../assets/SecondArrowIcon/SecondArrowIcon";
import classnames from "classnames";

const Benefits = ({ data }) => {
  const { items, primary } = data;  
  const { benefitsTitle, benefitsSubTitle, buttonShowText, buttonHiddenText } = primary;

  const [isOpenBenefits, setIsOpenBenefits] = useState(true);

  const handleBenefitsShow = () => {
    setIsOpenBenefits(!isOpenBenefits);
  };

  const benefitsItems = items.map((item, index) => {
    return (
      <BenefitsItem
        isOpenBenefits={isOpenBenefits}
        data={item}
        key={index.toString()}
        index={index}
      />
    );
  });

  return (
    <div className="section">
      <div className="content-section">
        <div className="content-section__inner">
          <div className={s.benefits}>
            <div className="container">
              <span className="section-category section-category--red">
                {benefitsTitle}
              </span>
              <h3 className="section-title section-title--brown section-title--small">
                {benefitsSubTitle}
              </h3>
              <div className="section-content">
                <div className={s.benefitsList}>{benefitsItems}</div>
                <div className={s.benefitsFooter}>
                  <button
                    onClick={handleBenefitsShow}
                    className={classnames(
                      "button button--regular button--show-more",
                      { "button--show-more-active": !isOpenBenefits }
                    )}
                  >
                    {isOpenBenefits ? buttonShowText : buttonHiddenText}
                    <SecondArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
