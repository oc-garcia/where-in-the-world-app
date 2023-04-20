import React, { useContext } from "react";
import styles from "./Header.module.css";
import moonLight from "./moon-light.svg";
import moonDark from "./moon.svg";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={theme ? styles.containerLight : styles.containerDark}>
      <h1 className={theme ? styles.titleLight : styles.titleDark}>Where in the World?</h1>
      <div className={styles.darkModeContainer} onClick={toggleTheme}>
        <img src={theme ? moonLight : moonDark} className={styles.icon} />
        <h4 className={theme ? styles.iconLabelLight : styles.iconLabelDark}>Dark Mode</h4>
      </div>
    </header>
  );
}
