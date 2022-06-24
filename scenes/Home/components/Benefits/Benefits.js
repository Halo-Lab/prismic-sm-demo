import s from "./Benefits.module.scss";
import React, { useState } from "react";
import BenefitsItem from "./BenefitsItem/BenefitsItem";
import SecondArrowIcon from "../../../../assets/SecondArrowIcon/SecondArrowIcon";
import classnames from "classnames";

const Benefits = ({ data }) => {
  const {
    benefits,
    benefitGeneralTitle,
    benefitCategory,
    buttonShowText,
    buttonHiddenText,
  } = data.benefits;
  const [isOpenBenefits, setIsOpenBenefits] = useState(true);

  const handleBenefitsShow = () => {
    setIsOpenBenefits(!isOpenBenefits);
  };

  const benefitsItems = benefits.map((item, index) => {
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
                {benefitCategory}
              </span>
              <h3 className="section-title section-title--brown section-title--small">
                {benefitGeneralTitle}
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
