import React from "react";
import styled from "styled-components";
import { strongCyan, veryDarkCyan,  } from "../../static/colors/color";

const FiledButton = styled.button`
  padding: 10px 0px;
  border-radius: 5px;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${strongCyan};
  color: ${veryDarkCyan};
  text-align: center;
  border:none;
  cursor: pointer;
margin-top: 20px;
  &:hover{
    background-color: ${strongCyan};
    color:${veryDarkCyan};
  }
`;

const ResetButton = ({ number,onClick}) => {
  return <FiledButton type="button" onClick={onClick}  >{number}</FiledButton>;
};

export default ResetButton;
