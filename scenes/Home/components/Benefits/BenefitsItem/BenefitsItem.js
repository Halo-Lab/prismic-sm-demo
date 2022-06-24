import React from "react";
import s from "./BenefitsItem.module.scss";
import ButtonWithArrow from "../../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";
import classnames from "classnames";

const BenefitsItem = ({ data, index, isOpenBenefits }) => {
  const { benefitTitle, benefitDescription, benefitIcon, benefitButtonText } =
    data;

  return (
    <div
      className={classnames(s.benefitsItem, {
        [s.benefitsItemHide]: index > 2 && isOpenBenefits,
      })}
      key={index}
    >
      <img className={s.img} src={''} alt={benefitTitle} />
      <h3 className={s.benefitsItemTitle}>{benefitTitle}</h3>
      <p className={s.benefitsItemDesc}>{benefitDescription}</p>
      <ButtonWithArrow buttonText={benefitButtonText} mod="button--regular" />
    </div>
  );
};

export default BenefitsItem;
