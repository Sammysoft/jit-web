import React, { useState } from "react";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import { Colors, Fonts } from "../Res/Styles";
import next from "../Res/Icons/next.svg";
import back from "../Res/Icons/back.svg";

const OrderPlacementScreen = () => {
  const [variant, setVariant] = useState("");
  const [index, setIndex] = useState(0);

  return (
    <>
      <Wrapper>
        {index === 0 && (
          <>
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
                {variant !== "Good Mama | Flora" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Flora");
                    }}
                  >
                    Flora
                  </Card>
                )}
                {variant === "Good Mama | Flora" && <Card chosen={true}>Flora</Card>}
                {variant !== "Good Mama | Ankara" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Ankara");
                    }}
                  >
                    Ankara
                  </Card>
                )}
                {variant === "Good Mama | Ankara" && <Card chosen={true}>Ankara</Card>}
                {variant !== "Good Mama | Diamond" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Diamond");
                    }}
                  >
                    Diamond
                  </Card>
                )}
                {variant === "Good Mama | Diamond" && <Card chosen={true}>Diamond</Card>}
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
                {variant !== "So klin | Ultra" && (
                  <Card
                    onClick={() => {
                      setVariant("So klin | Ultra");
                    }}
                  >
                    Ultra
                  </Card>
                )}
                {variant === "So klin | Ultra" && <Card chosen={true}>Ultra</Card>}
                {variant !== "So klin | Protect" && (
                  <Card
                    onClick={() => {
                      setVariant("So klin | Protect");
                    }}
                  >
                    Protect
                  </Card>
                )}
                {variant === "So klin | Protect" && <Card chosen={true}>Protect</Card>}
                {variant !== "So klin | Boom" && (
                  <Card
                    onClick={() => {
                      setVariant("So klin | Boom");
                    }}
                  >
                    Boom
                  </Card>
                )}
                {variant === "So klin | Boom" && <Card chosen={true}>Boom</Card>}
              </div>
            </div>

            <NextWrap
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Next <img src={next} alt="next" />
            </NextWrap>
          </>
        )}
        {index === 1 && (
          <>
            <HeadText>Set Quantity</HeadText>
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
                <Variant>{variant}</Variant>
            </div>
             <NextWrap
              style={{ float: "left" }}
              onClick={() => {
                setIndex(index - 1);
              }}
            >
             <img src={back} alt="next" />  Back
            </NextWrap>
            <NextWrap
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Next <img src={next} alt="next" />
            </NextWrap>
          </>
        )}
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
`;

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
  background-color: ${(props) =>
    props.chosen ? Colors.LIGHT : Colors.PRIMARY};
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  color: ${(props) => (props.chosen ? "black" : "#ffffff")};
  font-family: ${Fonts.Laila};
  text-align: center;
`;
export default OrderPlacementScreen;
