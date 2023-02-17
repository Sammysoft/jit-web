import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import AuthPage from "./Pages/AuthPage";
import OnboardPage from "./Pages/OnboardPage";
import DashboardPage from "./Pages/Dashboard";
import OrderPlacementScreen from "./Pages/OrderPlacement";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<StartPage />} />
      <Route path="/auth" exact element={<AuthPage />} />
      <Route path="/onboard" exact element={<OnboardPage />} />
      <Route path="/dashboard/*" exact element={<DashboardPage />} />
      <Route path="/order/*" exact element={<OrderPlacementScreen />} />
    </Routes>
  );
}

export default App;
