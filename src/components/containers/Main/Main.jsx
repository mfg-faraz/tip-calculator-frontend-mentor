import React from 'react'
import styled from 'styled-components'
import {  lightGrayishCyan } from '../../../static/colors/color'


const MainContainer = styled.main`
background-color:${lightGrayishCyan };
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
flex-direction:column;
gap:50px
`

const Main =( {children}) => {
  return (
    <MainContainer role='main'>{children}</MainContainer>
  )
}

export default Main