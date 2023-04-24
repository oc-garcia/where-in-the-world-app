import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../hooks/ThemeContext/ThemeContext";
import { ApiDataContext } from "../../hooks/ApiDataContext/ApiDataContext";

export default function CountryDetails() {
  const countryName = useParams();
  const { theme } = useContext(ThemeContext);
  const { detailedCountry, detailsData } = useContext(ApiDataContext);

  useEffect(() => {
    detailsData(countryName.name);
    console.log(detailedCountry);
    console.log(countryName.name);
  }, []);

  return <div>teste</div>;
}
