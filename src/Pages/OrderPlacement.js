import React from "react";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import { Colors, Fonts } from "../Res/Styles";
import next from "../Res/Icons/next.svg"

const OrderPlacementScreen = () => {
  return (
    <>
      <Wrapper>
        <HeadText>Select Variant</HeadText>
        <div
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Variant>Good Mama</Variant>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "30% 30% 30%",
              gap: "5%",
            }}
          >
            <Card> Flora</Card>
            <Card> Ankara</Card>
            <Card> Diamond</Card>
          </div>
          <Variant>So klin</Variant>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "30% 30% 30%",
              gap: "5%",
            }}
          >
            <Card> Ultra</Card>
            <Card> Protect</Card>
            <Card> Boom</Card>
          </div>
        </div>
        <NextWrap>Next <img src={next} alt="next"/></NextWrap>
      </Wrapper>
      <BottomNavBar />
    </>
  );
};

const NextWrap = styled.div`
width: 20%;
float: right;
font-family: ${Fonts.Laila};
align-items: center;
display: flex;
`

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
`;

const HeadText = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 600;
  font-size: 1.5rem;
  color: ${Colors.PRIMARY};
  text-align: left;
`;

const Variant = styled.div`
  font-family: ${Fonts.Laila};
  font-size: 1rem;
  opacity: 0.5;
  text-align: left;
  padding: 15px 0px 15px 0px;
`;

const Card = styled.div`
  background-color: ${Colors.PRIMARY};
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  color: #ffffff;
  font-family: ${Fonts.Laila};
  text-align: center;
`;
export default OrderPlacementScreen;
