import React from 'react'
import styled from 'styled-components'
import Rite from './Rite'
import Left from './Left'

function Main() {
  return (
    <Maincont>
        <Ritey><Rite/></Ritey>
        <Lefty><Left/></Lefty>
    </Maincont>
  )
}

export default Main

const Maincont = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
const Ritey = styled.div`
background: black;
// linear-gradient(180deg, #09285D 0%, #020A17 100%);
width: 23%;
height: 100%;
// gap: 0px;
opacity: 0px;
`
const Lefty = styled.div`
background: #FAFAFA;
width: 77%;
height: 100%;
// top: -513px;
// left: -720px;
// gap: 64px;
opacity: 0px;
`