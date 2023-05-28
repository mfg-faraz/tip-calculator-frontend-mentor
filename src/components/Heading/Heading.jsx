import React from "react";
import styled from "styled-components";
import { grayishCyan, veryDarkCyan } from "../../static/colors/color";

const H2 = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 1rem;
  color: ${grayishCyan};
  display: inline-block;
  margin-top: -100px;
  @media (max-width: 920px) {
    margin-top: 20px;
  }
  @media (max-width: 375px) {
    margin-top: 20px;
  }
`;

const Separator = styled.span`
  display: block;
`;

const Heading = () => {
  return (
    <H2>
      SPLI <Separator /> TTER
    </H2>
  );
};

export default Heading;
