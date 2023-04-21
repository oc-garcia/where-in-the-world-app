import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

import styles from "./CardList.module.css";

export default function CardList() {
  const { theme } = useContext(ThemeContext);
  const { apiData, connectApi } = useContext(ApiDataContext);

  useEffect(() => {
    connectApi();
  }, []);


  return (
    <section className={theme ? styles.containerLight : styles.containerDark}>
      {apiData.map((country)=> <p></p>)}
    </section>
  );
}
