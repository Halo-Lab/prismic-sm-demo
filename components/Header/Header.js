import Image from "next/legacy/image";
import Link from "next/link";

import styles from "./Header.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import Navigation from "./Navigation/Navigation";
import Sandwich from "./Sandwich/Sandwich";

const Header = ({ data }) => {
  const { items, primary } = data;
  const {logo, buttonLink, buttonText} = primary;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <Link href="/">
            <Image src={logo.url} alt={logo.alt} width="192px" height="32px" layout="fixed" priority />
          </Link>
          <div className={styles.headerRight}>
            <Navigation headerLinkArr={items} />
            <ButtonPrimary
              buttonLink={buttonLink}
              mod="button--second-type"
              buttonText={buttonText}
            />
          </div>
          <Sandwich
            headerLinkArr={items}
            buttonLink={buttonLink}
            buttonText={buttonText}
          />
        </div>
      </div>
   </header>
  );
};

export default Header;
