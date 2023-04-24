import { createContext, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  const [name, setName] = useState([]);

  const [detailedCountry, setDetailedCountry] = useState();

  const [displayRegion, setDisplayRegion] = useState(false);
  const [displayName, setDisplayName] = useState(false);

  async function regionData(prmt) {
    if (prmt === "") {
      return;
    }
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${prmt}`);
      const data = await response.json();
      if (data) {
        console.log(data);
        setRegion(data);
        setDisplayRegion(true);
        setDisplayName(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function nameData(prmt) {
    if (prmt === "") {
      return;
    }
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${prmt}`);
      const data = await response.json();
      if (data) {
        console.log(data);
        setName(data);
        setDetailedCountry(data)
        setDisplayRegion(false);
        setDisplayName(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

    async function detailsData(prmt) {
      if (prmt === "") {
        return;
      }
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${prmt}?fullText=true`);
        const data = await response.json();
        if (data) {
          console.log(data);
          setDetailedCountry(data);
        }
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <ApiDataContext.Provider
      value={{ region, regionData, name, nameData, displayName, displayRegion, detailedCountry, detailsData }}>
      {children}
    </ApiDataContext.Provider>
  );
};
