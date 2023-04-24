import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

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
      {detailedCountry.map((detail) => {
        return (
          <section className={styles.cardContainer}>
            <div>
              <img className={styles.flag} src={detail.flags.png}/>
            </div>
            <div>
              <h2>{detail.name.common}</h2>
            </div>
          </section>
        );
      })}
    </main>
  );
}
