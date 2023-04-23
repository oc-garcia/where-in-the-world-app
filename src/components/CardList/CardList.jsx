import React, { useContext, useState } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./CardList.module.css";
import CountryCard from "../CountryCard/CountryCard";
import idGen from "../../services/idGen";

export default function CardList() {
  const { theme } = useContext(ThemeContext);
  const { region, name, displayRegion, displayName } = useContext(ApiDataContext);

  return (
    <section className={theme ? styles.containerLight : styles.containerDark}>
      {region.length > 0 && displayRegion
        ? region.map((country) => {
            return (
              <CountryCard
                key={idGen("REGION")}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                subregion={country.subregion}
                capital={country.capital}
              />
            );
          })
        : ""}
      {name.length > 0 && displayName
        ? name.map((country) => {
            return (
              <CountryCard
                key={idGen("NAME")}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                subregion={country.subregion}
                capital={country.capital}
              />
            );
          })
        : ""}
      {displayName === false && displayRegion === false ? (
        <div className={styles.referenceContainer}>
          <p className={theme ? styles.instructionsLight : styles.instructionsDark}>
            Text search will look for Country Names, Capitals and Aliases.
          </p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
