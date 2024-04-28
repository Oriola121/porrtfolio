import React from 'react'
import styled from 'styled-components'

function Left1() {
  return (
    <Left1cont>
      <Left1wrap>
        <L1>
        <p className='tech'>turning ideas into<br/>real life products<br/>is my calling</p>
        <p className='code'>I code</p>
        <p className='but'>Contact</p>
        </L1>
        <L2>
        </L2>
      </Left1wrap>
    </Left1cont>
  )
}

export default Left1

const Left1cont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
color: #fff;
font-family: poppins;
`
const Left1wrap = styled.div`
width: 75%;
height: 100%;
display: flex;
justify-content: space-between;
`
const L1 = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;

.tech {
  font-size: 30px;
  font-weight: 700;
}
.code{
  font-size: 16px;
  // font-weight: 700;
}

.but{
  background: #fff;
  // background: #1B1218;
  width: 23%;
  height: 10%;
  border-radius: 4px;
  color: #000;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const L2 = styled.div`
width: 50%;
height: 100%;


`