import React from "react";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import CardList from "../../components/CardList/CardList";

export default function Home() {
  return (
    <main>
      <SearchFilterBar />
      <CardList />
    </main>
  );
}
