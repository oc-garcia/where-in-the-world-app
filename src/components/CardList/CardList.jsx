import React, { useContext, useState } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";
import { v4 as uuidv4 } from "uuid";

import styles from "./CardList.module.css";
import CountryCard from "../CountryCard/CountryCard";
import { Link } from "react-router-dom";

export default function CardList() {
  const { theme } = useContext(ThemeContext);
  const { region, name, displayRegion, displayName } = useContext(ApiDataContext);

  return (
    <section className={theme ? styles.containerLight : styles.containerDark}>
      {region.length > 0 && displayRegion
        ? region.map((country) => {
            return (
              <Link key={uuidv4()} to={`details/${country.name.common}`}>
                <CountryCard
                  key={uuidv4()}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  subregion={country.subregion}
                  capital={country.capital}
                />
              </Link>
            );
          })
        : ""}
      {name.length > 0 && displayName
        ? name.map((country) => {
            return (
              <Link key={uuidv4()} to={`details/${country.name.common}`}>
                <CountryCard
                  key={uuidv4()}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  subregion={country.subregion}
                  capital={country.capital}
                />
              </Link>
            );
          })
        : ""}
    </section>
  );
}
