/* eslint-disable */

import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import AuthPage from "./Pages/AuthPage";
import OnboardPage from "./Pages/OnboardPage";
import DashboardPage from "./Pages/Dashboard";
import OrderPlacementScreen from "./Pages/OrderPlacement";
import { StateContext } from "../src/StateContext";

function App() {
  const [orders, setOrders] = useState([]);
  const stateContext = useMemo(() => {
    return {
      _setOrders: (value) => {
        setOrders(orders.push(value));
      },
      _getOrders: orders
    };
  },[]);

  return (
    <Routes>
      <Route path="/" exact element={<StartPage />} />
      <Route path="/auth" exact element={<AuthPage />} />
      <Route path="/onboard" exact element={<OnboardPage />} />
      <Route
        path="/dashboard/*"
        exact
        element={
          <StateContext.Provider value={stateContext}>
            <DashboardPage />
          </StateContext.Provider>
        }
      />
      <Route
        path="/order/*"
        exact
        element={
          <StateContext.Provider value={stateContext}>
            <OrderPlacementScreen />
          </StateContext.Provider>
        }
      />
    </Routes>
  );
}

export default App;
