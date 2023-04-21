import { createContext, useState } from "react";

export const ApiDataContext = createContext([]);

export const ApiDataProvider = ({ children }) => {
  const [region, setRegion] = useState([]);

  async function regionData(prmt) {
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

  return <ApiDataContext.Provider value={{ region, regionData }}>{children}</ApiDataContext.Provider>;
};
