import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<PublicRoutes><LoginScreen /></PublicRoutes>} />
        <Route
          exact
          path="*"
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
