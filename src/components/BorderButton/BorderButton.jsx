import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./BorderButton.module.css";

export default function BorderButton() {
  const { theme } = useContext(ThemeContext);
  const { detailedCountry, borders, borderData } = useContext(ApiDataContext);

  useEffect(() => {
    borderData(detailedCountry);
  }, [detailedCountry]);

  return (
    <>
      {/*borders.map((border) => (
        <Link to={`details/${border.name.common}`}>{border.name.common}</Link>
      ))*/}
    </>
  );
}

