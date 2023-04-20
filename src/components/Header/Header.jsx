import React from "react";
import styles from "./Header.module.css";
import moonLight from "./moon-light.svg";
import moonDark from "./moon.svg";

export default function Header() {
  return (
    <header className={styles.containerLight}>
      <h1 className={styles.TitleLight}>Where in the World?</h1>
      <img src={moonLight} className={styles.iconLight} />
    </header>
  );
}
