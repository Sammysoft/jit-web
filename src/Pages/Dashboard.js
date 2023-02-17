import React from "react";
import BottomNavBar from "../Components/BottomNavBar";
import ProductListings from "../Components/ProductListings";
import Tracker from "../Components/Tracker";
import { Colors, Fonts } from "../Res/Styles";

const DashboardPage = () => {
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
      <BottomNavBar />
    </>
  );
};

export default DashboardPage;
