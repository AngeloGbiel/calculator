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
  @media(max-width:400px){
    width: 100%;
    height: 100%;
  }
`

export default function HomePage() {
  const [value, setValue] = useState(0)
  const [result, setResult] = useState(0)
  const [verefication, setVerification] = useState(true)

  const BackSpace = () => {
    if (value.length == 1) {
      setValue(0)
    } else {
      try {
        setValue(value.substring(0, value.length - 1))
        setVerification(true)
      } catch (error) {
        console.log('Realize alguma operação')
      }
    }
  }

  const CalcResul = () => {
    try {
      setResult(eval(value))
    } catch (error) {
      setResult("Operação Inválida")
    }
  }

  const OperatorValues = (e) => {
    if (e == "C") {
      setValue(0)
      if(result == "Operação Inválida"){
        setResult(0)
      }
    } else if (value == '0') {
      if (e == "÷" || e == "+" || e == "-" || e == "×" || e == "%") {
        return
      } else if (e == ".") {
        setValue("0.")
      } else {
        setValue(e)
      }
    } else if (e == "÷" || e == "+" || e == "-" || e == "×" || e == "%" || e=="."){
      if(verefication==true){
        setVerification(false)
        if (e == "÷") {
          setValue(value + '/')
        } else if (e == "×") {
          setValue(value + '*')
        }else if(e=="%"){
          try {
            setValue(eval(value)/100)
            setResult(eval(value)/100)
            setVerification(true)
          } catch (error) {
            setResult("Operação inválida")
          }
        }
        else{
          setValue(value+e)
        }
      }
    } else {
        setValue(value + e)
        setVerification(true)
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
