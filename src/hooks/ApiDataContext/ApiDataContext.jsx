import { createContext, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  const [name, setName] = useState([]);

  const [detailedCountry, setDetailedCountry] = useState([]);

  const [borders, setBorder] = useState([]);

  const [displayRegion, setDisplayRegion] = useState(false);
  const [displayName, setDisplayName] = useState(false);
  const [borderString, setBorderString] = useState("");

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

  function getBorderString(prmt) {
    prmt.map((border) => {
      console.log(border.borders.join(","));
      setBorderString(border.borders.join(","));
      return;
    });
  }
  // async function borderData(prmt) {
  //   if (prmt.lenght === 0) {
  //     return;
  //   }

  //   prmt.map((border) => {
  //     setBorderString(border.borders.join(","));
  //     console.log(borderString);
  //   });

  //   try {
  //     const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderString}`);
  //     const data = await response.json();
  //     if (data) {
  //       setBorder(data);
  //     } else {
  //       return;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async function detailsData(prmt) {
    setDetailedCountry([]);
    if (prmt === "") {
      return;
    }
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${prmt}?fullText=true`);
      const dataDetails = await response.json();
      if (dataDetails) {
        setDetailedCountry(dataDetails);
        getBorderString(dataDetails);
        console.log(detailedCountry);
        console.log(borders);
      }
    } catch (e) {
      console.log(e);
    } finally {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderString}`);
        const dataBorder = await response.json();
        if (dataBorder) {
          setBorder(dataBorder);
          console.log(borders);
        }
      } catch (e) {
        console.log(e);
      }
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
        //borderData,
      }}>
      {children}
    </ApiDataContext.Provider>
  );
};
