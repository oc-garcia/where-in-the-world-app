import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./CountryDetails.module.css";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import BorderButton from "../../components/BorderButton/BorderButton";

export default function CountryDetails() {
  const countryName = useParams();
  const { theme } = useContext(ThemeContext);
  const { detailsData, borderData, detailedCountry, borders } = useContext(ApiDataContext);

  useEffect(() => {
    detailsData(countryName.name);
  }, []);

  useEffect(() => {
    borderData(detailedCountry);
  }, [detailedCountry]);

  return (
    <>
      <main className={theme ? styles.containerLight : styles.containerDark}>
        <Link to={"/"}>
          <button className={theme ? styles.buttonLight : styles.buttonDark}>Back</button>
        </Link>
        <DetailedCard />
      </main>
      <aside>{<BorderButton />}</aside>
    </>
  );
}
