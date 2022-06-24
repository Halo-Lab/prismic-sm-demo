import React from "react";
import s from "./MobileAppFunction.module.scss";

const MobileAppFunction = ({ data }) => {
  const { icon, title } = data;

  return (
    <div className={s.mobileAppFunction}>
      <img className={s.img} src={''} alt={title} />
      <span className={s.mobileAppFunctionText}>{title}</span>
    </div>
  );
};

export default MobileAppFunction;
