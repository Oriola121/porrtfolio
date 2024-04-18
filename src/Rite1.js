import React from 'react'
import styled from 'styled-components'
import Gold from './image/ori.jpg'

function Rite1() {
  return (
    <R1cont>
      <img src={Gold} className='goldie'/>
      <Ori>muhibudeen abdurrahman oriola</Ori>
      <Abt>web developer, graphics designer</Abt>
    </R1cont>
  )
}

export default Rite1
const R1cont = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.goldie {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: -10px;
}
`
const Ori = styled.div`
margin-top: 10px;
margin-bottom: 5px;
text-transform: uppercase;
font-size: 14px;
font-family: Segoe UI;
font-weight: 700;
text-decorattion: none solid rgb(128, 128, 128);
`
const Abt = styled.div`
text-transform: uppercase;
font-family: Segoe UI;
font-size: 11px;
color: rgb(128, 128, 128);
text-decorattion: none solid rgb(128, 128, 128);
`