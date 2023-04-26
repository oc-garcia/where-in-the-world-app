import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";
import { v4 as uuidv4 } from "uuid";
import styles from "./DetailedCard.module.css";
import BorderButton from "../BorderButton/BorderButton";

export default function DetailedCard() {
  const { theme } = useContext(ThemeContext);
  const { detailedCountry } = useContext(ApiDataContext);
  return (
    <>
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
                  {Object.keys(detail.currencies).join(",")}
                </p>
                <p className={theme ? styles.TextLight : styles.textDark}>
                  <strong>Languages: </strong>
                  {Object.values(detail.languages).join(", ")}
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
    </>
  );
}
