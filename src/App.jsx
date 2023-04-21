import React, { useEffect, useState } from "react";
import { connectApi } from "./services/api";
import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";

import Header from "./components/Header/Header";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    connectApi();
  }, []);
  return (
    <ThemeProvider>
      <Header />
      <main>
        <SearchFilterBar />
        <CardList />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
