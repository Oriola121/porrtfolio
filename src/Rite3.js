import React from 'react'
import styled from 'styled-components'
import { TiContacts } from "react-icons/ti"


function Rite3() {
  return (
    <R3cont>
        <R3wrap>
          <TiContacts className='icon'/>
          <p>Contact Me</p>
          </R3wrap>
    </R3cont>
  )
}

export default Rite3

const R3cont = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
// margin-top: 10px;
`
const R3wrap = styled.div`
width: 95%;
height: 95%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
font-family: times new romans;
`