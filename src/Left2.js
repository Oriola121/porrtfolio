import React from 'react'
import styled from 'styled-components'
import prog from './image/html.png'
import prog1 from './image/css.png'
import prog3 from './image/github.png'
import prog4 from './image/firebase.png'
import prog2 from './image/js.png'

function Left2 (){
  return (
    <Left2cont>
      <Left2wrap>
        <img src={prog} className='program'/>
        <img src={prog1} className='program'/>
        <img src={prog2} className='program'/>
        <img src={prog3} className='program'/>
        <img src={prog4} className='program'/>
      </Left2wrap>
    </Left2cont>
  )
}

export default Left2

const Left2cont = styled.div`
width: 100%;
height: 100%;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
`
const Left2wrap = styled.div`
width: 90%;
height: 90%;
display: flex;
align-items: center;
background: #21212B;

.program{
  // width: 10%;
  height: 90%;
  padding: 10px;
}
`