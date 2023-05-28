import React, { useMemo, useState } from "react";
import Main from "../containers/Main/Main";
import Card from "../containers/Card/Card";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { darkGrayishCyan, veryDarkCyan } from "../../static/colors/color";
import CardGreen from "../containers/Card/CardGreen";
import AmountContainer from "../AmountContainer/AmountContainer";
import ResetButton from "../Button/ResetButton";
import ButtonInput from "../ButtonInput/ButtonInput";

const H1 = styled.h1`
  visibility: hidden;
`;

const Section = styled.section``;
const ButtonMainContainer = styled.div`
  margin: 25px 0px !important;
`;
const Label = styled.label`
  color: ${darkGrayishCyan};
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
  @media (min-width: 375px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 375px) {
    gap: 50px;
  }
`;

const initialValue = { bill: null, people: null, tip: null };

const TipCalculator = () => {
  const [values, setValues] = useState(initialValue);
  const [selectedBtn, setSelectedBtn] = useState("");

  const changeHandler = (e) => {
    console.log(e);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const tipAmount = useMemo(() => {
    const valuesForCalc = { ...values };
    const totalTip =
      (parseFloat(valuesForCalc.tip) / 100) * parseFloat(valuesForCalc.bill);
    return !totalTip || totalTip === Infinity ? 0 : totalTip.toFixed(2);
  }, [values]);
  const totalAmount = useMemo(() => {
    const valuesForCalc = { ...values };
    const total =
      (parseFloat(valuesForCalc.bill) + parseFloat(tipAmount)) /
      parseFloat(valuesForCalc.people);
    console.log(total);
    return !total || total === Infinity ? 0 : total.toFixed(2);
  }, [values,tipAmount]);

  const buttonData = [5, 10, 15, 25, 50];
  const resetHandler = () => {
    setValues(initialValue);
  };

  return (
    <Main>
      <H1>Tip calculator app</H1>
      <Heading />
      <Card>
        <Section>
          <Input
            onChange={changeHandler}
            name="bill"
            value={values.bill}
            label="Bill"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
                <path
                  fill="#9EBBBD"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                />
              </svg>
            }
          />
          <ButtonMainContainer>
            <Label>Select Tip %</Label>
            <ButtonContainer>
              {buttonData.map((val,i) => (
                <Button
                key={i}
                  selectedBtn={selectedBtn}
                  onClick={(num) => {
                    setSelectedBtn(num);
                    changeHandler({ target: { name: "tip", value: val } });
                  }}
                  number={val}
                />
              ))}
              <ButtonInput
                selectedBtn={selectedBtn}
                value={values.tip}
                onClick={() => setSelectedBtn("custom")}
                onChange={changeHandler}
              >
                Custom
              </ButtonInput>
            </ButtonContainer>
          </ButtonMainContainer>
          <Input
            label="Number Of People"
            name="people"
            onChange={changeHandler}
            value={values.people}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg>
            }
          />
        </Section>
        <Section>
          <CardGreen styled={`back-ground:${veryDarkCyan}`}>
            <AmountWrap>
              <AmountContainer heading="Tip Amount" price={tipAmount} />
              <AmountContainer heading="Total" price={totalAmount} />
            </AmountWrap>
            <ResetButton number="Reset" values={values} onClick={resetHandler} />
          </CardGreen>
        </Section>
      </Card>
    </Main>
  );
};

export default TipCalculator;
