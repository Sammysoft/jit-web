import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import sheild from "../Res/Icons/shield.svg";
import { Colors, Fonts } from "../Res/Styles";
import { StateContext } from "../StateContext";

const OrderPage = ({ setScreen }) => {
  const { _getOrders } = useContext(StateContext);
  console.log(_getOrders);
  const navigate = useNavigate();
  return (
    <>
      {_getOrders.length !== 0 ? (
        <>
          <Wrapper style={{display:"block", height: "80vh"}}>
            <HeadText>Orders</HeadText>
            {_getOrders.map((order, id) => (
              <>
                <div
                  style={{
                    height: "fit-content",
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "flex-start",
                    // justifyContent: "center",
                    width: "90%",
                    padding: 5,
                    border: `1px solid ${Colors.PRIMARY}`,
                    margin: "5%",
                    borderRadius:10
                  }}
                >
                  <DeepText key={id}>
                    {order.variant} | {order.gram} | {order.amount} Cartons
                  </DeepText>
                  <Variant>{order.delivery}</Variant>
                </div>
              </>
            ))}
          </Wrapper>
          <TextLink
              onClick={() => {
                navigate("/order");
              }}
            >
              Place Another Order
            </TextLink>
        </>
      ) : (
        <>
          <Wrapper>
            <img src={sheild} alt="sheild-logo" />
            <Text>No Orders Yet</Text>
            <TextLink
              onClick={() => {
                navigate("/order");
              }}
            >
              Place An Order
            </TextLink>
          </Wrapper>
        </>
      )}
      <BottomNavBar setScreen={setScreen} />
    </>
  );
};

const Wrapper = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

const Text = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 600;
  font-size: 1rem;
  opacity: 0.4;
`;

const TextLink = styled.div`
  font-family: ${Fonts.Laila};
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 10px;
  padding: 5px;
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
  font-size: 0.7rem;
  opacity: 0.5;
  text-align: left;
  padding: 10px 0px 10px 0px;
`;

const DeepText = styled.div`
  font-family: ${Fonts.Laila};
  font-size: 1rem;
  text-align: left;
  padding: 10px 0px 10px 0px;
`;

export default OrderPage;
