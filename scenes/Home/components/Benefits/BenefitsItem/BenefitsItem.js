import Image from "next/image";
import classnames from "classnames";

import s from "./BenefitsItem.module.scss";
import ButtonWithArrow from "../../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";

const BenefitsItem = ({ data, index, isOpenBenefits }) => {
  const { benefitsCardLogo, benefitsCardTitle, benefitsCardText, benefitsCardLink} = data;

  return (
    <div
      className={classnames(s.benefitsItem, {
        [s.benefitsItemHide]: index > 2 && isOpenBenefits,
      })}
      key={index}
    >    
      <Image src={benefitsCardLogo.url} className={s.img} alt={benefitsCardTitle} width={32} height={32} />
      <h3 className={s.benefitsItemTitle}>{benefitsCardTitle}</h3>
      <p className={s.benefitsItemDesc}>{benefitsCardText}</p>
      <ButtonWithArrow buttonText={benefitsCardLink} mod="button--regular" />
    </div>
  );
};

export default BenefitsItem;
