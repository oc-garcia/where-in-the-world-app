import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";

import styles from "./CountryCard.module.css";

export default function CountryCard({ flag, name, population, subregion, capital }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? styles.cardContainerLight : styles.cardContainerDark}>
      <img className={styles.flag} src={flag} />
      <div className={styles.textContainer}>
        <h2 className={theme ? styles.nameLight : styles.nameDark}>{name}</h2>
        <p className={theme ? styles.populationLight : styles.populationDark}>
          Population: {population.toLocaleString()}
        </p>
        <p className={theme ? styles.subregionLight : styles.subregionDark}>Sub Region: {subregion}</p>
        <p className={theme ? styles.capitalLight : styles.capitalDark}>Capital: {capital}</p>
      </div>
    </div>
  );
}
