import React, { useState } from 'react'
import styled from 'styled-components'
import Buttons from '../components/calculator/Buttons'
import Delete from '../components/calculator/Delete'
import Screen from '../components/calculator/Screen'

const Container = styled.div`
  background-color: #010101;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 35rem;
  width: 18rem;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
`

export default function HomePage() {
  const [value, setValue] = useState(0)
  const [result, setResult] = useState(0)

  const BackSpace = () => {
    try {
      setValue(value.substring(0, value.length - 1))
    } catch (error) {
      console.log('Realize alguma operação')
    }
  }

  const CalcResul = () => {
    console.log('resultado');
    setResult(eval(value))
  }

  const OperatorValues = (e) => {
    if (e == "C") {
      setValue(0)
    } else if (value == 0) {
      setValue(e)
    }else if(e=="÷"){
      setValue(value+'/')
    }else if(e=="×"){
      setValue(value+'*')
    }
    else {
      console.log(value.length);
      setValue(value + e)
    }
  }

  return (
    <Container>
      <Screen value={value} result={result} />
      <Delete BackSpace={BackSpace} />
      <Buttons OperatorValues={OperatorValues} CalcResul={CalcResul} />
    </Container>
  )
}
