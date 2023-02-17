import React from "react";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import sheild from "../Res/Icons/shield.svg";
import { Fonts } from "../Res/Styles";

const OrderPage = ({ setScreen }) => {
  return (
    <>
      <Wrapper>
        <img src={sheild} alt="sheild-logo"/>
        <Text>No Orders Yet</Text>
        <BottomNavBar setScreen={setScreen} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 600;
  font-size: 1rem;
  opacity: 0.4;
`;

export default OrderPage;
