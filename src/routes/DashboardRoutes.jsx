import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MarvelScreen />} />
        <Route exact path="/marvel" element={<MarvelScreen />} />
        <Route exact path="/dc" element={<DcScreen />} />
        <Route exact path="/search" element={<SearchScreen />} />
      </Routes>
    </>
  );
};
