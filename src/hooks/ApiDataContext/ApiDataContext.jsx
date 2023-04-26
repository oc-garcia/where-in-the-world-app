import { createContext, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  const [name, setName] = useState([]);

  const [detailedCountry, setDetailedCountry] = useState([]);

  const [borders, setBorder] = useState([]);

  const [displayRegion, setDisplayRegion] = useState(false);
  const [displayName, setDisplayName] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
    setLoaded(false);
    setDetailedCountry([]);
    setBorder([]);
    try {
      const responseDetails = await fetch(`https://restcountries.com/v3.1/name/${prmt}?fullText=true`);
      const dataDetails = await responseDetails.json();
      if (dataDetails) {
        setDetailedCountry(dataDetails);
        if (dataDetails[0].borders !== undefined) {
          const borderString = dataDetails[0].borders.join(",");

          try {
            const responseBorder = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderString}`);
            const dataBorder = await responseBorder.json();
            if (dataBorder) {
              setBorder(dataBorder);
              setDetailedCountry(dataDetails);
              setTimeout(() => {
                setLoaded(true);
              }, "500");
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          setTimeout(() => {
            setLoaded(true);
          }, "500");
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
        borders,
        loaded,
      }}>
      {children}
    </ApiDataContext.Provider>
  );
};
