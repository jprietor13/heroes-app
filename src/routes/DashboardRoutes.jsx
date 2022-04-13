import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
      <Routes>
        <Route exact path="/" element={<MarvelScreen />} />
        <Route exact path="/marvel" element={<MarvelScreen />} />
        <Route exact path="/dc" element={<DcScreen />} />
        <Route exact path="/search" element={<SearchScreen />} />
        <Route exact path="/hero/:idHero" element={ <HeroScreen /> }/>
      </Routes>
      </div>
    </>
  );
};
