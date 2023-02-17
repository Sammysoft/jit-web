import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors, Fonts } from "../Res/Styles";

const ProductListings = () => {
  const navigate = useNavigate();
  return (
    <>
      <Head>PRODUCT LISTING</Head>

      <Wrapper>
        <Card
          onClick={() => {
            navigate("/order");
          }}
        >
          <Text>Good Mama</Text>
        </Card>
        <Card
          onClick={() => {
            navigate("/order");
          }}
        >
          <Text>So Klin</Text>
        </Card>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
  width: 90%;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  height: 20vh;
  border: 1px solid ${Colors.PRIMARY};
  background-color: ${Colors.PRIMARY};
`;

const Text = styled.div`
  font-family: ${Fonts.Laila};
  color: #ffffff;
`;
const Head = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 700;
  opacity: 0.4;
  padding: 20px;
  color: black;
`;
export default ProductListings;
