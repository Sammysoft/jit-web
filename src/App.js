import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import AuthPage from "./Pages/AuthPage";
import OnboardPage from "./Pages/OnboardPage";
import DashboardPage from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<StartPage />} />
      <Route path="/auth" exact element={<AuthPage />} />
      <Route path="/onboard" exact element={<OnboardPage />} />
      <Route path="/dashboard/*" exact element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
