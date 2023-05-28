import React, { useState } from "react";
import styled from "styled-components";
import { strongCyan, veryDarkCyan, veryLightGrayishCyan } from "../../static/colors/color";

const FiledButton = styled.button`
  padding: 10px 0px;
  border-radius: 5px;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${props => (props.$active?strongCyan:veryDarkCyan)};
  color: ${veryLightGrayishCyan};
  text-align: center;
  border:none;
  cursor: pointer;

  &:hover{
    background-color: ${strongCyan};
    color:${veryDarkCyan};
  }
  
  `;

const Button = ({selectedBtn, number,onClick}) => {
  console.log("sel",selectedBtn);
  return <FiledButton $active={selectedBtn===number&&selectedBtn!=="custom"}  type="button" onClick={()=>{ onClick(number)}}>{number}%</FiledButton>;
};

export default Button;
