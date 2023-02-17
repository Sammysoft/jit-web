import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";
import { Fonts } from "../Res/Styles";

const OnboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Header>Create Account</Header>
          <InputLabel>Full Name</InputLabel>
          <Input placeholder={"Olaoluwa Busola"} />
          <InputLabel>Phone Number</InputLabel>
          <Input placeholder={"234 904 3849 908"} />
          <InputLabel>Email Address</InputLabel>
          <Input placeholder={"olaoluwa123@gmail.com"} />
          <InputLabel>Password</InputLabel>
          <Input placeholder={"**********"} />
          <Button text={"Create"} />
          <TextWrap>
            <span> Already have an account ? </span>
            <DeepText
              onClick={() => {
                navigate("/Auth");
              }}
            >
              Sign in
            </DeepText>
          </TextWrap>
        </FormWrapper>
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

const FormWrapper = styled.div`
  width: 80%;
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
`;

const InputLabel = styled.div`
  font-family: ${Fonts.Laila};
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  font-family: ${Fonts.Laila};
  margin-bottom: 10px;
`;

const TextWrap = styled.div`
  font-family: ${Fonts.Laila};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;
const DeepText = styled.div`
  font-size: 1rem;
  font-weight: 800;
`;

export default OnboardPage;
