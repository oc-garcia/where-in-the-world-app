import { createContext, useState } from "react";

export const ApiDataContext = createContext([]);

export const ApiDataProvider = ({ children }) => {
  const [apiData, setapiData] = useState([]);

  const connectApi = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      if (data) {
        console.log(data);
        setapiData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <ApiDataContext.Provider value={{ apiData, connectApi }}>{children}</ApiDataContext.Provider>;
};
