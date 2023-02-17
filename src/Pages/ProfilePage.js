import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import Button from "../Components/Button";
import { Fonts, Colors } from "../Res/Styles";

const ProfilePage = ({ setScreen }) => {
//   const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Header>Profile</Header>
          <InputLabel>Full Name</InputLabel>
          <Input placeholder={"Olaoluwa Busola"} />
          <InputLabel>Phone Number</InputLabel>
          <Input placeholder={"234 904 3849 908"} />
          <InputLabel>Email Address</InputLabel>
          <Input placeholder={"olaoluwa123@gmail.com"} />
          <InputLabel>Password</InputLabel>
          <Input placeholder={"**********"} />
          <Button text={"Save"} />
        </FormWrapper>
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

const FormWrapper = styled.div`
  width: 80%;
  font-family: ${Fonts.Laila};
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
  font-family: ${Fonts.Laila};
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
  border: 1px solid ${Colors.PRIMARY};
`;


export default ProfilePage;
