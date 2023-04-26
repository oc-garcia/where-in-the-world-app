import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";

import iconLight from "./spinner-light.svg";
import iconDark from "./spinner-dark.svg";

import styles from "./Loader.module.css";

export default function Loader() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme ? styles.containerLight : styles.containerDark}>
      <img src={theme ? iconLight : iconDark} alt="Loader" className={styles.loader} />
    </div>
  );
}
