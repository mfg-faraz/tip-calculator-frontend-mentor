import React from 'react'
import styled from 'styled-components'
import { veryDarkCyan } from '../../static/colors/color'

const H1 = styled.h1`
font-size:1.5rem;
letter-spacing: 1rem;
width:100px;
color:${veryDarkCyan};
display:inline-block;
margin-top:-100px;
@media (max-width:375px) {
  
  margin-top:20px;
}
`

const Heading = () => {
  return (
    <H1>SPLI TTER</H1>
  )
}

export default Heading