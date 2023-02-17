import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fonts, Colors } from "../Res/Styles";
import home from "../Res/Icons/home.svg";
import bell from "../Res/Icons/bell.svg";
import order from "../Res/Icons/order.svg";
import profile from "../Res/Icons/profile.svg";

const BottomNavBar = ({ setScreen }) => {
  return (
    <>
      <Wrapper>
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: Colors.PRIMARY,
          }}
        >
          <IconWrap
            onClick={() => {
              setScreen("/dashboard");
            }}
          >
            <img src={home} alt="home-icon" />
            <Text>Home</Text>
          </IconWrap>
        </Link>
        <Link
          to="/dashboard/orders"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: Colors.PRIMARY,
          }}
        >
          <IconWrap
            onClick={() => {
              setScreen("/dashboard/orders");
            }}
          >
            <img src={order} alt="order-icon" />
            <Text>Orders</Text>
          </IconWrap>
        </Link>
        <Link
          to="/dashboard/notifications"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: Colors.PRIMARY,
          }}
        >
          <IconWrap
            onClick={() => {
              setScreen("/dashboard/notifications");
            }}
          >
            <img src={bell} alt="bell-icon" />
            <Text>Notification</Text>
          </IconWrap>
        </Link>
        <Link
          to="/dashboard/profile"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: Colors.PRIMARY,
          }}
        >
          <IconWrap
            onClick={() => {
              setScreen("/dashboard/profile");
            }}
          >
            <img src={profile} alt="profile-icon" />
            <Text>Profile</Text>
          </IconWrap>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 99%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0px;
  right: 0px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
  background-color: #ffffff;
  z-index: 1;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Text = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 800;
  font-size: 10px;
`;

export default BottomNavBar;
