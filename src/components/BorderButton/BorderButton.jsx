import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import styles from "./BorderButton.module.css";

export default function BorderButton() {
  const { theme } = useContext(ThemeContext);
  const { borders } = useContext(ApiDataContext);

  return (
    <>
      {Object.values(borders).map((border) =>
        border === undefined ? (
          ""
        ) : (
          <Link key={uuidv4()} to={`../details/${border.name?.common}`}>
            <button className={theme ? styles.buttonLight : styles.buttonDark}>{border.name?.common}</button>
          </Link>
        )
      )}
    </>
  );
}
