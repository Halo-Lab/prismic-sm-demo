import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const renderMenu = (items) => {
  const menu = items.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.linkHref}>
          <a className={styles.menuLink}>{item.linkName}</a>
        </Link>
      </li>
    );
  });

  return menu;
};

const Navigation = ({ headerLinkArr }) => {
  return <ul className={styles.menu}>{renderMenu(headerLinkArr)}</ul>;
};

export default Navigation;
