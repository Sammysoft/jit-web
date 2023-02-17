import styled from "styled-components";
import React from "react";
import { Colors, Fonts } from "../Res/Styles";
import { useNavigate } from "react-router-dom";

const Button = ({ text, nav }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper
        onClick={() => {
          navigate(nav);
        }}
      >
        {text}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  padding: 10px;
  text-align: center;
  background-color: ${Colors.PRIMARY};
  color: #ffffff;
  font-weight: 800;
  border-radius: 10px;
  font-family: ${Fonts.Laila};
`;

export default Button;
