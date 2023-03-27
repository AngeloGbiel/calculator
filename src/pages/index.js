import React from 'react'
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
  return (
    <Container>
      <Screen/>
        <Delete/>
        <Buttons/>
    </Container>
  )
}
