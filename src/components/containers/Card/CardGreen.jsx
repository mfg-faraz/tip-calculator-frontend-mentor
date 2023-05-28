import React from 'react'
import { veryDarkCyan } from '../../../static/colors/color'
import styled from 'styled-components'

const CardContainer = styled.div`
background-color:${veryDarkCyan};
border-radius:20px;
padding:25px;
height: 100%;
display:flex;justify-content: space-between;flex-direction:column;
`

const CardGreen = ({children}) => {
  return (
    <CardContainer >{children}</CardContainer>
  )
}

export default CardGreen