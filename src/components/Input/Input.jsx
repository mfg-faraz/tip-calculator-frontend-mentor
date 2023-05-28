import React from "react";
import styled from "styled-components";
import {
  darkGrayishCyan,
  grayishCyan,
  lightGrayishCyan,
  strongCyan,
  veryDarkCyan,
  veryLightGrayishCyan,
} from "../../static/colors/color";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  color: ${darkGrayishCyan};
  font-size: 1.1rem;
`;

const FieldGroup = styled.div`
  position: relative;
  width: 100%;

`;

const FieldIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

const Field = styled.input`
  border: none;
  background-color: ${veryLightGrayishCyan};
  text-align: right;
  padding: 10px 15px;
  font-size: 1.5rem;
  width: 100%;
  color: ${veryDarkCyan};
  &:focus{
   outline-color: ${strongCyan};
  };
  &::placeholder{
    color:${grayishCyan}
  }
`;

const Input = ({ label, icon,onChange,name, value}) => {
  return (
    <Container>
      <Label htmlFor={`"id_"${name}`}>{label}</Label>
      <FieldGroup>
        <FieldIcon>{icon}</FieldIcon>
        <Field id={`"id_"${name}`} value={value} min={0} onChange={onChange} name={name} type="number" placeholder="0"  />
      </FieldGroup>
    </Container>
  );
};

export default Input;
