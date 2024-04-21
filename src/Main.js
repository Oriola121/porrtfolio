import React from 'react'
import styled from 'styled-components'
import Rite from './Rite'
import Left from './Left'

function Main() {
  return (
    <Maincont>
      <Mainwrap>
        <Ritey><Rite/></Ritey>
        <Lefty><Left/></Lefty>
      </Mainwrap>
    </Maincont>
  )
}

export default Main

const Maincont = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #191923;

// @media screen and (max-width: 1075px){
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// }
`
const Mainwrap = styled.div`
width: 96.5%;
height: 93.5%;
display: flex;
`
const Ritey = styled.div`
background: #1B1212;
// linear-gradient(180deg, #09285D 0%, #020A17 100%);
width: 23%;
height: 100%;
// gap: 0px;
opacity: 0px;
// @media screen and (max-width: 1075px){
//   width: 100%;
//   height: 50%;
//   // display: flex;
//   // flex-direction: column;
// }
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