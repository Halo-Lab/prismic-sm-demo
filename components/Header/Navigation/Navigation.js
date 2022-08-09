import Link from "next/link";
import { PrismicLink } from "@prismicio/react";

import styles from "./Navigation.module.scss";

const renderMenu = (items) => {
  const menu = items.map((item, index) => {

    return (
      <li key={index}>
        <PrismicLink field={item.link}>
          <span className={styles.menuLink}>{item.linkName}</span>
        </PrismicLink>
      </li>
    );
  });

  return menu;
};

const Navigation = ({ headerLinkArr }) => {
  return <ul className={styles.menu}>{renderMenu(headerLinkArr)}</ul>;
};

export default Navigation;
