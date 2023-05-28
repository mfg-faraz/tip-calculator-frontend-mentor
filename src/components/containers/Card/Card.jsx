import React from 'react'
import { white } from '../../../static/colors/color'
import styled from 'styled-components'

const CardContainer = styled.div`
background-color:${white};
border-radius:20px;
padding:25px;
width: 80%;
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 20px;
@media (max-width:920px){
  grid-template-columns: repeat(1,minmax(0,1fr));
}

@media (max-width:920px){
  grid-template-columns: repeat(1,minmax(0,1fr)) !important;width: 80%
}

@media (max-width:375px){
  grid-template-columns: repeat(1,minmax(0,1fr)) !important;width: 100%;
}
`

const Card = ({children}) => {
  return (
    <CardContainer>{children}</CardContainer>
  )
}

export default Card;
