import React from "react";
import s from "./BenefitsItem.module.scss";
import ButtonWithArrow from "../../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";
import classnames from "classnames";

const BenefitsItem = ({ data, index, isOpenBenefits }) => {
  const { benefitsCardLogo, benefitsCardTitle, benefitsCardText, benefitsCardLink, benefitsCardLinkHref } = data;

  return (
    <div
      className={classnames(s.benefitsItem, {
        [s.benefitsItemHide]: index > 2 && isOpenBenefits,
      })}
      key={index}
    >
      <img className={s.img} src={benefitsCardLogo.url} alt={benefitsCardTitle} />
      <h3 className={s.benefitsItemTitle}>{benefitsCardTitle}</h3>
      <p className={s.benefitsItemDesc}>{benefitsCardText}</p>
      <ButtonWithArrow buttonText={benefitsCardLink} mod="button--regular" />
    </div>
  );
};

export default BenefitsItem;
