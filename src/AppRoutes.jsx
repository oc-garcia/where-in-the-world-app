import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";
import { ApiDataProvider } from "./hooks/ApiDataContext/ApiDataContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import CountryDetails from "./pages/CountryDetails/CountryDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <ApiDataProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="details/:name" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ApiDataProvider>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
