import React from 'react'
import styled from 'styled-components'

const ScreenStyled=styled.div`
    height: 24%;
    position: relative;
    .operar{
        color: white;
        font-size: 2.3rem;
        position: absolute;
        right: 10px;
        top: 20px;
    }
    .resul{
        color: #5E5E5E;
        font-size: 1.2rem;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

export default function Screen() {
  return (
    <ScreenStyled>
        <span className='operar'>10+5</span>
        <span className='resul'>15</span>
    </ScreenStyled>
  )
}
