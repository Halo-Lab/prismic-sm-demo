import React from "react";
import s from "./ButtonWithArrow.module.scss";
import ArrowIcon from "../../../assets/ArrowIcon/ArrowIcon";

const ButtonWithArrow = ({
  buttonText,
  buttonLink = "https://www.halo-lab.com/",
}) => {
  return (
    <a href={buttonLink} className={s.buttonArrow} rel="nofollow">
      <div className={s.buttonWrapper}>
        {buttonText}
        {<ArrowIcon />}
      </div>
    </a>
  );
};

export default ButtonWithArrow;
