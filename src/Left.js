import React from 'react'
import styled from 'styled-components'
import Left1 from './Left1'
import Left2 from './Left2'
import Left3 from './Left3'
import Bg from './image/mount.webp'

function Left() {
  return (
    <Leftcont>
      <Leftwrap>
        <L1><Left1/></L1>
        <L2><Left2/></L2>
        <L3><Left3/></L3>
      </Leftwrap>
    </Leftcont>
  )
}

export default Left

const Leftcont = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Bg});
background-size: cover;
background-position: center;
// backdrop-filter: blur(1rem); 
`
const Leftwrap = styled.div`
width: 100%;
height: 100%;
background-color: #212325;
opacity: 0.9;
display: flex;
flex-direction: column;
align-items: center;
`
const L1 = styled.div`
width: 95%;
height: 50%;
margin-top: 40px;
`
const L2 = styled.div`

`
const L3 = styled.div`

`