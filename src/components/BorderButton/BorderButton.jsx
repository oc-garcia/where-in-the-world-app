import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./BorderButton.module.css";

export default function BorderButton() {
  const { theme } = useContext(ThemeContext);
  const { detailedCountry, borders, borderData } = useContext(ApiDataContext);

  return (
    <>
      {Object.values(borders).map((border) => (
        <Link to={`details/${border.name.common}`}>{border.name.common}</Link>
      ))}
    </>
  );
}
