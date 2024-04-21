import React from 'react'
import styled from 'styled-components'
import Bg from './image/mount.webp'

function Left1() {
  return (
    <Left1cont>
      <Left1wrap>
        <L1>
        <p className='tech'>Explore My Exciting<br/>Tech Wolrd!</p></L1>
        <L2>
          <img src='' alt='Ori Gold'/>
        </L2>
      </Left1wrap>
    </Left1cont>
  )
}

export default Left1

const Left1cont = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
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

.tech {
  font-size: 30px;
  font-weight: 700;
}
`
const L2 = styled.div`
width: 50%;
height: 100%;
`