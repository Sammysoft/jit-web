import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { Fonts } from "../Res/Styles";

const StartPage = () => {
  return (
    <>
      <Wrapper>
        <ContentWrap>
          <HeadText>Welcome to JIT App</HeadText>
          <Button
            text={"Get Started"}
            nav={"/auth"}
          />
        </ContentWrap>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${Fonts.Laila};
`;
const HeadText = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const ContentWrap = styled.div`
  width: 50%;
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;

export default StartPage;
