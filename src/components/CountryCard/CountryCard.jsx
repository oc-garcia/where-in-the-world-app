import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";

import styles from "./CountryCard.module.css";

export default function CountryCard({ flag, name, population, subregion, capital }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? styles.cardContainerLight : styles.cardContainerDark}>
      <img className={styles.flag} src={flag} />
      <h2 className={styles.nameLight}>{name}</h2>
      <p className={styles.populationLight}>Population: {population}</p>
      <p className={styles.subregionLight}>Sub Region: {subregion}</p>
      <p className={styles.capitalLight}>Capital: {capital}</p>
    </div>
  );
}
