import Image from 'next/image';

import s from "./BenefitsItem.module.scss";
import ButtonWithArrow from "../../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";
import classnames from "classnames";

const BenefitsItem = ({ data, index, isOpenBenefits }) => {
  const { benefitsCardLogo, benefitsCardTitle, benefitsCardText, benefitsCardLink} = data;

  return (
    <div
      className={classnames(s.benefitsItem, {
        [s.benefitsItemHide]: index > 2 && isOpenBenefits,
      })}
      key={index}
    >    
      <Image src={benefitsCardLogo.url} className={s.img} alt={benefitsCardTitle} width="32px" height="32px" layout="fixed" />
      <h3 className={s.benefitsItemTitle}>{benefitsCardTitle}</h3>
      <p className={s.benefitsItemDesc}>{benefitsCardText}</p>
      <ButtonWithArrow buttonText={benefitsCardLink} mod="button--regular" />
    </div>
  );
};

export default BenefitsItem;
