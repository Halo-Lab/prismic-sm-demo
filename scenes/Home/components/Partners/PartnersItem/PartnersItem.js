import React from "react";
import s from "./PartnersItem.module.scss";

const PartnersItem = ({ data }) => {
  const { partnersLogo } = data;

  return (
    <div className={s.partnersItem}>
      <img className={s.img} src={partnersLogo.url} alt={partnersLogo.alt} />
    </div>
  );
};

export default PartnersItem;
