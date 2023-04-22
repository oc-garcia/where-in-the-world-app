import { createContext, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  const [name, setName] = useState([]);

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
      }
    } catch (e) {
      console.log(e);
    }
  }

  return <ApiDataContext.Provider value={{ region, regionData, name, nameData }}>{children}</ApiDataContext.Provider>;
};
