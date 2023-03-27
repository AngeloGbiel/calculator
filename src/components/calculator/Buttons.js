import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 5px;
    border-top: 1px solid #292929;
    padding-top: 25px;
    button{
        background-color: #171717;
        color: white;
        width: 60px;
        height: 60px;
        outline: none;
        border: none;
        border-radius: 50%;
        font-size:1.3rem;
        transition: all .1s;
    }
    button:active{
        background-color: #272727;
    }
    button:nth-child(1){
        color: #e36b6a;
    }
    button:nth-child(2),button:nth-child(3){
        color: #7CD24B;
    }
    button:nth-child(4n){
        color: #7CD24B;
    }
    button:last-child{
        background-color: #2B8406;
        color: white;
    }
    button:last-child:active{
        background-color: #37A710;
    }
`

export default function Buttons() {
    const buttons = ["C","(",")","÷","7","8","9","×","4","5","6","-","1","2","3","+","0",".","%"]
  return (
    <ButtonStyled>
        {
            buttons.map((value,i)=>{
                return(
                    <button key={i} value={value} >{value}</button>
                )
            })
        }
        <button value={"="}>=</button>
    </ButtonStyled>
  )
}
