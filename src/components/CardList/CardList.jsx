import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./CardList.module.css";
import CountryCard from "../CountryCard/CountryCard";

export default function CardList() {
  const { theme } = useContext(ThemeContext);
  const { region } = useContext(ApiDataContext);
  return (
    <section className={theme ? styles.containerLight : styles.containerDark}>
      {region.length > 0 ? (
        region.map((country) => {
          return (
            <CountryCard
              key={country.area}
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
              subregion={country.subregion}
              capital={country.capital}
            />
          );
        })
      ) : (
        <p>teste</p>
      )}
    </section>
  );
}
