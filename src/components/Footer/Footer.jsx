import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className={theme ? styles.containerLight : styles.containerDark}>
      <p>Octavio Garcia. 2023.</p>
    </footer>
  );
}
