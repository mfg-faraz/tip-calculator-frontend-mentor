import React from 'react'
import styled from 'styled-components'
import { darkGrayishCyan, grayishCyan, strongCyan, veryLightGrayishCyan } from '../../static/colors/color'

const AmountContainer = ({heading,price}) => {
    const AmountWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;`
const AmountHeadingWrapper=styled.div``
const AmountHeading=styled.div`color:${veryLightGrayishCyan};`
const AmountSubHeading=styled.div`
color:${grayishCyan};
font-size: 12px;
`
const Amount =styled.div`
color:${strongCyan};
font-size: 24px;
`

  return (
    <AmountWrapper>
    <AmountHeadingWrapper>
      <AmountHeading>{heading}</AmountHeading>
      <AmountSubHeading>/ person</AmountSubHeading>
    </AmountHeadingWrapper>
    <Amount>${price}</Amount>
  </AmountWrapper>
  )
}

export default AmountContainer