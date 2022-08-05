import Image from 'next/image';

import s from "./MobileAppFunction.module.scss";

const MobileAppFunction = ({ data }) => {
  const { mobileAppFunctionText, mobileAppFunctionLogo } = data;

  return (
    <div className={s.mobileAppFunction}>
      <Image src={mobileAppFunctionLogo.url} className={s.img} alt={mobileAppFunctionText} width="38px" height="38px" layout="fixed" /> 
      <span className={s.mobileAppFunctionText}>{mobileAppFunctionText}</span>
    </div>
  );
};

export default MobileAppFunction;
