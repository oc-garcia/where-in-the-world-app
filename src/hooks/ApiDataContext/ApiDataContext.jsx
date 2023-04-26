import { createContext, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  const [name, setName] = useState([]);

  const [detailedCountry, setDetailedCountry] = useState([]);

  const [borders, setBorder] = useState([]);

  const [displayRegion, setDisplayRegion] = useState(false);
  const [displayName, setDisplayName] = useState(false);

  async function regionData(prmt) {
    setName([]);
    setRegion([]);
    setDetailedCountry([]);
    if (prmt === "") {
      return;
    }
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${prmt}`);
      const data = await response.json();
      if (data) {
        setRegion(data);
        setDisplayRegion(true);
        setDisplayName(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function nameData(prmt) {
    setName([]);
    setRegion([]);
    setDetailedCountry([]);
    if (prmt === "") {
      return;
    }
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${prmt}`);
      const data = await response.json();
      if (data) {
        setName(data);
        setDisplayRegion(false);
        setDisplayName(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function detailsData(prmt) {
    try {
      const responseDetails = await fetch(`https://restcountries.com/v3.1/name/${prmt}?fullText=true`);
      const dataDetails = await responseDetails.json();
      if (dataDetails) {
        const borderString = dataDetails[0].borders.join(",");
        try {
          const responseBorder = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderString}`);
          const dataBorder = await responseBorder.json();
          if (dataBorder) {
            console.log(dataBorder);
            setBorder(dataBorder);
            console.log(borders);
            setDetailedCountry(dataDetails);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ApiDataContext.Provider
      value={{
        region,
        regionData,
        name,
        nameData,
        displayName,
        displayRegion,
        detailedCountry,
        detailsData,
        borders
      }}>
      {children}
    </ApiDataContext.Provider>
  );
};
