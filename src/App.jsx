import { ThemeProvider } from "./hooks/ThemeContext/ThemeContext";
import { ApiDataProvider } from "./hooks/ApiDataContext/ApiDataContext";

import Header from "./components/Header/Header";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <ApiDataProvider>
          <SearchFilterBar />
          <CardList />
        </ApiDataProvider>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
