import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  grayishCyan,
  strongCyan,
  veryDarkCyan,
  veryLightGrayishCyan,
} from "../../static/colors/color";
const CustomButton = styled.button`
  padding: 10px 0;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  font-size: 1.5rem;
  border: none;
  background-color: ${veryLightGrayishCyan};
  color: ${grayishCyan};
  cursor: pointer;
  &:hover {
    background-color: ${strongCyan};
    color: ${veryDarkCyan};
  }
`;
const Field = styled.input`
  border: none;
  background-color: ${veryLightGrayishCyan};
  text-align: right;
  padding: 10px 15px;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 5px;
  color: ${veryDarkCyan};
  &:focus{
   outline-color: ${strongCyan};
  }
`;

const ButtonInput = ({ children,onChange,value,onClick,selectedBtn }) => {
  const [toggleInput, setToggleInput] = useState(false)
  useEffect(() => {
    if(value===0) setToggleInput(false)
    if(selectedBtn!=="custom")setToggleInput(false)
  }, [value,selectedBtn])
  
  return (
    <>
      {toggleInput ? (
        <Field value={value} onClick={onClick} type="number" name="tip" onChange={onChange} defaultValue={0} />
      ) : (
        <CustomButton onClick={() => {onClick();setToggleInput(true)}}>
          {children}
        </CustomButton>
      )}
    </>
  );
};

export default ButtonInput;
