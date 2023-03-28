import React from 'react'
import * as FiIcons from 'react-icons/fi'
import styled from 'styled-components'

const DeleteStyled = styled.div`
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button{
        width: 30px;
        height: 30px;
        font-size: 1.1rem;
        color: #40502F;
        background-color: transparent;
        outline: none;
        border: none;
        margin-right: 10px;
        cursor: pointer;
    }
`

export default function Delete({BackSpace}) {
  return (
    <DeleteStyled>
        <button onClick={BackSpace}><FiIcons.FiDelete/></button>
    </DeleteStyled>
  )
}
