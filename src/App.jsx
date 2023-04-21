import React, { useEffect, useState } from "react";

import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";

import Header from "./components/Header/Header";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import { connectApi } from "./services/api";

export default function App() {
  useEffect(() => {
    connectApi();
  }, []);
  return (
    <ThemeProvider>
      <Header />
      <SearchFilterBar />
    </ThemeProvider>
  );
}
