import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";
import { v4 as uuidv4 } from "uuid";

import styles from "./CountryDetails.module.css";

export default function CountryDetails() {
  const countryName = useParams();
  const { theme } = useContext(ThemeContext);
  const { detailedCountry, detailsData } = useContext(ApiDataContext);

  useEffect(() => {
    detailsData(countryName.name);
  }, []);

  return (
    <main className={theme ? styles.containerLight : styles.containerDark}>
      <button className={theme ? styles.buttonLight : styles.buttonDark}>Back</button>
      {detailedCountry.map((detail) => {
        return (
          <section key={uuidv4()} className={styles.cardContainer}>
            <div className={styles.flagContainer}>
              <img className={theme ? styles.flagLight : styles.flagDark} src={detail.flags.png} />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.TitleContainer}>
                <h2 className={theme ? styles.TextLight : styles.textDark}>{detail.name.common}</h2>
              </div>
              <div className={styles.detailsContainer}>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Official Name: </strong>
                  {detail.name.official}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Population: </strong>
                  {detail.population.toLocaleString()}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Region: </strong>
                  {detail.region}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Sub Region: </strong>
                  {detail.subregion}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Capital: </strong>
                  {detail.capital}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Top Level Domain: </strong>
                  {detail.tld}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Currencies: </strong>
                  {Object.keys(detail.currencies).map((key) => ` ${key}`)}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Languages: </strong>
                  {Object.values(detail.languages).map((value) => ` ${value}`)}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Independent: </strong>
                  {detail.independent ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
