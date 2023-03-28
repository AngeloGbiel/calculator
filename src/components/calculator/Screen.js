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
    @media(max-width:400px){
        margin-top: 10%;
    }
`

export default function Screen({result,value}) {
  return (
    <ScreenStyled>
        <span className='operar'>{value}</span>
        <span className='resul'>{result}</span>
    </ScreenStyled>
  )
}
