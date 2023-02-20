import React, { useContext, useState } from "react";
import styled from "styled-components";
import BottomNavBar from "../Components/BottomNavBar";
import { Colors, Fonts } from "../Res/Styles";
import next from "../Res/Icons/next.svg";
import back from "../Res/Icons/back.svg";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../StateContext";

const OrderPlacementScreen = () => {
  const {_setOrders} = useContext(StateContext)
  const navigate = useNavigate();
  const [variant, setVariant] = useState("");
  const [delivery, setDelivery] = useState("");
  const [amount, setAmount] = useState("");
  const [gram, setGram] = useState("");
  const [index, setIndex] = useState(0);

  const _order=()=>{
    const payload = {
      variant, delivery, gram, amount
    }
    _setOrders(payload)
    navigate("/dashboard/orders")
  }

  return (
    <>
      <Wrapper>
        {index === 0 && (
          <>
            <HeadText>Select Variant</HeadText>
            <div
              style={{
                height: "70vh",
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
                {variant === "Good Mama | Flora" && (
                  <Card chosen={true}>Flora</Card>
                )}
                {variant !== "Good Mama | Lemon" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Lemon");
                    }}
                  >
                    Lemon
                  </Card>
                )}
                {variant === "Good Mama | Lemon" && (
                  <Card chosen={true}>Lemon</Card>
                )}
                {variant !== "Good Mama | Ankara" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Ankara");
                    }}
                  >
                    Ankara
                  </Card>
                )}
                {variant === "Good Mama | Ankara" && (
                  <Card chosen={true}>Ankara</Card>
                )}
                {variant !== "Good Mama | Diamond" && (
                  <Card
                    onClick={() => {
                      setVariant("Good Mama | Diamond");
                    }}
                  >
                    Diamond
                  </Card>
                )}
                {variant === "Good Mama | Diamond" && (
                  <Card chosen={true}>Diamond</Card>
                )}
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
                {variant === "So klin | Ultra" && (
                  <Card chosen={true}>Ultra</Card>
                )}
                {variant !== "So klin | Protect" && (
                  <Card
                    onClick={() => {
                      setVariant("So klin | Protect");
                    }}
                  >
                    Protect
                  </Card>
                )}
                {variant === "So klin | Protect" && (
                  <Card chosen={true}>Protect</Card>
                )}
                {variant !== "So klin | Boom" && (
                  <Card
                    onClick={() => {
                      setVariant("So klin | Boom");
                    }}
                  >
                    Boom
                  </Card>
                )}
                {variant === "So klin | Boom" && (
                  <Card chosen={true}>Boom</Card>
                )}
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
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Variant>{variant}</Variant>
              <SelectorWrap>
                <Selector>How many (g) do you want?</Selector>
                <Selector>
                  <div
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "30% 30% 30%",
                      gap: "5%",
                    }}
                  >
                    {gram === "22 (g)" && (
                      <Card chosen={true}>{variant} 22 (g)</Card>
                    )}
                    {gram !== "22 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("22 (g)");
                        }}
                      >
                        {variant} 22 (g)
                      </Card>
                    )}
                    {gram === "80 (g)" && (
                      <Card chosen={true}>{variant} 80 (g)</Card>
                    )}
                    {gram !== "80 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("80 (g)");
                        }}
                      >
                        {variant} 80 (g)
                      </Card>
                    )}
                    {gram === "90 (g)" && (
                      <Card chosen={true}>{variant} 90 (g)</Card>
                    )}
                    {gram !== "90 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("90 (g)");
                        }}
                      >
                        {variant} 90 (g)
                      </Card>
                    )}
                    {gram === "170 (g)" && (
                      <Card chosen={true}>{variant} 170 (g)</Card>
                    )}
                    {gram !== "170 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("170 (g)");
                        }}
                      >
                        {variant} 170 (g)
                      </Card>
                    )}
                    {gram === "450 (g)" && (
                      <Card chosen={true}>{variant} 450 (g)</Card>
                    )}
                    {gram !== "450 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("450 (g)");
                        }}
                      >
                        {variant} 450 (g)
                      </Card>
                    )}
                    {gram === "850 (g)" && (
                      <Card chosen={true}>{variant} 850 (g)</Card>
                    )}
                    {gram !== "850 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("850 (g)");
                        }}
                      >
                        {variant} 850 (g)
                      </Card>
                    )}
                    {gram === "935 (g)" && (
                      <Card chosen={true}>{variant} 935 (g)</Card>
                    )}
                    {gram !== "935 (g)" && (
                      <Card
                        onClick={() => {
                          setGram("935 (g)");
                        }}
                      >
                        {variant} 935 (g)
                      </Card>
                    )}
                  </div>
                </Selector>
              </SelectorWrap>
            </div>
            <NextWrap
              style={{ float: "left" }}
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <img src={back} alt="next" /> Back
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
        {index === 2 && (
          <>
            <HeadText>Set Delivery Amount & Location</HeadText>
            <div
              style={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Variant>{variant}</Variant>
              <Variant>{gram}</Variant>
              <SelectorWrap>
                <Selector>Where should we drop your package?</Selector>
                <Selector>
                  <Input
                    placeholder="Enter delivery Address"
                    value={delivery}
                    onChange={(e) => {
                      setDelivery(e.target.value);
                    }}
                  />
                </Selector>
              </SelectorWrap>
              <SelectorWrap>
                <Selector>How many cartons do you want?</Selector>
                <Selector>
                  <Input
                    placeholder="Enter Amount of cartons"
                    type={"number"}
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </Selector>
              </SelectorWrap>
            </div>
            <NextWrap
              style={{ float: "left" }}
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <img src={back} alt="next" /> Back
            </NextWrap>
            <NextWrap
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Done
            </NextWrap>
          </>
        )}
        {index === 3 && (
          <>
            <HeadText>Confirm Order</HeadText>
            <div
              style={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <SelectorWrap>
                <Selector>
                  Is this exactly what you want to be delivered?
                </Selector>
                <Selector>
                  <Variant>{variant}</Variant>
                  <Variant>
                    {gram} | {amount} Cartons.
                  </Variant>
                  <Variant>To be delivered to, {delivery}</Variant>
                </Selector>
              </SelectorWrap>
            </div>
            <NextWrap
              style={{ float: "left" }}
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <img src={back} alt="next" /> Back
            </NextWrap>
            <NextWrap
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Done
            </NextWrap>
          </>
        )}
        {index === 4 && (
          <>
            <HeadText>Congratulations!🎊🎊🎊</HeadText>
            <div
              style={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                fontFamily: Fonts.Laila
              }}
            >
              <SelectorWrap>
                {/* <Selector>
                  Is this exactly what you want to be delivered?
                </Selector>
                <Selector>
                  <Variant>{variant}</Variant>
                  <Variant>
                    {gram} | {amount} Cartons.
                  </Variant>
                  <Variant>To be delivered to, {delivery}</Variant>
                </Selector> */}🎉🎉🎉<br/>
                Congratulations! your order as been placed succesfully, you will
                be notified once the product is ready for pick up.<br/>🎉🎉🎉
              </SelectorWrap>
            </div>
            {/* <NextWrap
              style={{ float: "left" }}
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <img src={back} alt="next" /> Back
            </NextWrap> */}
            <NextWrap
              onClick={() => {
                _order()
                // window.location.reload(false);
              }}
            >
              Orders
            </NextWrap>
          </>
        )}
      </Wrapper>
      <BottomNavBar />
    </>
  );
};

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  font-family: ${Fonts.Laila};
  margin-bottom: 10px;
  border: 1px solid ${Colors.PRIMARY};
`;

const SelectorWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Selector = styled.div`
  font-family: ${Fonts.Laila};
  width: 100%;
  text-align: center;
`;
// const Select = styled.select`
//   width: 60%;
//   padding: 10px;
//   font-family: ${Fonts.Laila};
//   border-radius: 10px;
//   border: 1px solid ${Colors.PRIMARY};
//   background-color: ${Colors.PRIMARY};
//   color: #ffffff;
// `;
// const Option = styled.option`
//   font-family: ${Fonts.Laila};
//   color: #ffffff;
// `;

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
  padding: 10px 0px 10px 0px;
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
