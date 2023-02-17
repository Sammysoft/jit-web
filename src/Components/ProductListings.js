import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Res/Styles";

const ProductListings = () => {
  return (
    <>
      <Head>PRODUCT LISTING</Head>
      <Wrapper>
        <Card>
          <Text>Product 1</Text>
          <Text>Good Mama</Text>
        </Card>
        <Card>
          <Text>Product 2</Text>
          <Text>So Klin</Text>
        </Card>
        <Card>
          <Text>Product 3</Text>
          <Text>WaW</Text>
        </Card>
        <Card>
          <Text>Product 4</Text>
          <Text>Ariel</Text>
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
`;

const Text = styled.div`
  font-family: ${Fonts.Laila};
  color: black;
`;
const Head = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 700;
  opacity: 0.4;
  padding: 20px;
  color: black;
`;
export default ProductListings;
