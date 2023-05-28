import React from "react";
import styled from "styled-components";
import { strongCyan, veryDarkCyan,  darkGrayishCyan, grayishCyan, lightGrayishCyan} from "../../static/colors/color";

const FiledButton = styled.button`
  padding: 10px 0px;
  border-radius: 5px;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${props=>(props.$disabled?strongCyan:darkGrayishCyan)};
  color: ${props=>(props.$disabled? veryDarkCyan:grayishCyan)};
  text-align: center;
  border:none;
  cursor: pointer;
margin-top: 20px;
  &:hover{
    background-color: ${lightGrayishCyan};
    color:${veryDarkCyan};
  }
`;

const ResetButton = ({ number,onClick,values}) => {
  console.log("VA",values);
  return <FiledButton $disabled={(values?.bill||values?.tip||values?.person)} type="button" onClick={onClick}  >{number}</FiledButton>;
};

export default ResetButton;
