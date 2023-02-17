import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Res/Styles";


const Tracker = ()=>{
    return(
        <>
            <Wrapper>
                <Input placeholder="Enter the tracking number..."/>
                <Button>Track</Button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 80%;
padding: 10%;
`

const Input = styled.input`
width: 60%;
background-color: #FFFFFF;
border-radius: 10px;
border: 1px solid #FFFFFF;
padding: 10px;
font-family: ${Fonts.Laila}
`

const Button = styled.div`
width: fit-content;
padding: 10px;
text-align: center;
color: ${Colors.PRIMARY};
background-color: #FFC200;
border-radius: 10px;
pointer: cursor;
`

export default Tracker;