import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from ".//SearchFilterBar.module.css";

export default function SearchFilterBar() {
  const { theme } = useContext(ThemeContext);
  const { region, regionData, name, nameData } = useContext(ApiDataContext);

  const handleSelectChange = (event) => {
    nameData("");
    regionData(event.target.value);
  };

  const handleTextChange = (event) => {
    regionData("");
    nameData(event.target.value);
  };

  return (
    <section className={theme ? styles.containerLight : styles.containerDark}>
      <input
        id="text"
        type="text"
        placeholder="Search for a Country..."
        className={theme ? styles.textInputLight : styles.textInputDark}
        onChange={handleTextChange}
      />
      <p className={theme ? styles.instructionsLight : styles.instructionsDark}>
        *Text search will look for Country Names, Capitals and Aliases.
      </p>
      <select
        id="select"
        onChange={handleSelectChange}
        className={theme ? styles.selectInputLight : styles.selectInputDark}>
        <option value={undefined}>Filter by Region</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}
