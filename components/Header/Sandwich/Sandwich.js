import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Sandwich.module.scss";

import Navigation from "../Navigation/Navigation";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import SandwichIcon from "../../../assets/SandwichIcon/SandwichIcon";
import CloseIcon from "../../../assets/CloseIcon/CloseIcon";
const Sandwich = ({ buttonLink, buttonText, headerLinkArr }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSandwichClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.sandwich}>
      <button
        onClick={handleSandwichClick}
        type="button"
        className={styles.sandwichOpenBtn}
      >
        <SandwichIcon />
      </button>
      <div
        onClick={handleSandwichClick}
        className={classnames(styles.sandwichWrapper, {
          [styles.sandwichWrapperActive]: isMenuOpen,
        })}
      />
      <div
        className={classnames(styles.sandwichContent, {
          [styles.sandwichContentOpened]: isMenuOpen,
        })}
      >
        <div className={styles.sandwichHeader}>
          <button
            onClick={handleSandwichClick}
            className={styles.sandwichClose}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.sandwichMain}>
          <ButtonPrimary
            buttonLink={buttonLink.current}
            mod="button--second-type"
            buttonText={buttonText}
          />
          <div onClick={handleSandwichClick}>
            <Navigation headerLinkArr={headerLinkArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;
