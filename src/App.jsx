import React from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
