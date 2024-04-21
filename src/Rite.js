import React from 'react'
import styled from 'styled-components'
import Rite1 from './Rite1'
import Rite2 from './Rite2'
import Rite3 from './Rite3'

function Right() {
  return (
    <Ritecont>
      <Ritewrap>
        <R1><Rite1/></R1>
        <R2><Rite2/></R2>
        <R3><Rite3/></R3>
      </Ritewrap>
    </Ritecont>
  )
}

export default Right

const Ritecont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
`
const Ritewrap = styled.div`
width: 100%;
height: 95%;
`
const R1 = styled.div`
width: 100%;
height: 35%;
// border-bottom: 1px solid grey;
`
const R2 = styled.div`
width: 100%;
height: 60%;
// border-bottom: 1px solid grey;
`
const R3 = styled.div`
width: 100%;
height: 5%;
`