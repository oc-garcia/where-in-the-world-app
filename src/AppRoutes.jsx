import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";
import { ApiDataProvider } from "./hooks/ApiDataContext/ApiDataContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <main>
          <ApiDataProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </ApiDataProvider>
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
