/* eslint-disable */
import React, { useState, useEffect } from "react";
import BottomNavBar from "../Components/BottomNavBar";
import ProductListings from "../Components/ProductListings";
import Tracker from "../Components/Tracker";
import { Colors, Fonts } from "../Res/Styles";
import NotificationPage from "./Notifications";
import OrderPage from "./OrdersPage";
import ProfilePage from "./ProfilePage";

const DashboardPage = () => {
  const thisRoute = window.location.pathname;
  const [screen, setScreen] = useState("");
  useEffect(() => {
    setScreen(thisRoute);
  }, [screen]);

  switch (screen) {
    case "/dashboard/orders":
      return <OrderPage setScreen={setScreen} />;
      break;
    case "/dashboard/notifications":
      return <NotificationPage setScreen={setScreen} />;
      break;
    case "/dashboard/profile":
      return <ProfilePage setScreen={setScreen} />;
      break;
    default:
      return (
        <>
          <div
            style={{
              backgroundColor: Colors.PRIMARY,
              width: "100%",
              fontFamily: Fonts.Laila,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              height: "30vh",
              color: "#FFFFFF",
            }}
          >
            <div style={{ width: "80%", padding: "10%", fontSize: "1.5rem" }}>
              Good Morning, Johnson
            </div>
            <Tracker />
            <ProductListings />
          </div>
          <BottomNavBar setScreen={setScreen} />
        </>
      );
      break;
  }
};

export default DashboardPage;
