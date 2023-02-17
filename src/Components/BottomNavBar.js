import React from "react";
import styled from "styled-components";
import { Fonts } from "../Res/Styles";
import home from "../Res/Icons/home.svg";
import bell from "../Res/Icons/bell.svg";
import order from "../Res/Icons/order.svg";
import profile from "../Res/Icons/profile.svg"


const BottomNavBar=()=>{
    return(
        <>
            <Wrapper>
                <IconWrap>
                    <img src={home} alt="home-icon" />
                    <Text>Home</Text>
                </IconWrap>
                <IconWrap>
                    <img src={order} alt="order-icon" />
                    <Text>Orders</Text>
                </IconWrap>
                <IconWrap>
                    <img src={bell} alt="bell-icon" />
                    <Text>Notification</Text>
                </IconWrap>
                <IconWrap>
                    <img src={profile} alt="profile-icon" />
                    <Text>Profile</Text>
                </IconWrap>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 99%;
padding: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
position: fixed;
bottom: 0px;
right: 0px;
box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
`;

const IconWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const Text= styled.div`
font-family: ${Fonts.Laila};
font-weight: 800;
font-size: 10px;
`

export default BottomNavBar;