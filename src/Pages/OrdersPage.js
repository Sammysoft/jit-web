import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import sheild from "../Res/Icons/shield.svg";
import { Colors, Fonts } from "../Res/Styles";

const OrderPage = ({ setScreen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <img src={sheild} alt="sheild-logo" />
        <Text>No Orders Yet</Text>
        <TextLink
          onClick={() => {
            navigate("/order");
          }}
        >
          Place An Order
        </TextLink>
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

const TextLink = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 10px;
  padding: 5px;
`;

export default OrderPage;
