import Image from "next/legacy/image";

import s from "./PartnersItem.module.scss";

const PartnersItem = ({ data }) => {
  const { partnersLogo } = data;

  return (
    <div className={s.partnersItem}>
      <div className={s.imageContainer}>
        <Image src={partnersLogo.url} className={s.image} alt={partnersLogo.alt} layout="fill" /> 
      </div>
    </div>
  );
};

export default PartnersItem;
