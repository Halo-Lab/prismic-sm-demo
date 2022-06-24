import React from "react";
import s from "./MobileAppFunction.module.scss";

const MobileAppFunction = ({ data }) => {
  const { mobileAppFunctionText, mobileAppFunctionLogo } = data;

  return (
    <div className={s.mobileAppFunction}>
      <img className={s.img} src={mobileAppFunctionLogo.url} alt={mobileAppFunctionText} />
      <span className={s.mobileAppFunctionText}>{mobileAppFunctionText}</span>
    </div>
  );
};

export default MobileAppFunction;
