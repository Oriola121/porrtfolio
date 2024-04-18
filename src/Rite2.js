import React from 'react'
import styled from 'styled-components'

function Rite2() {
  return (
    <R2cont>
        <R2wrap>
          <div className='skilrate'><p>Front-End</p>
            <p>Back-End</p>
            <p>Graphics</p></div>
            <div className='ceevee'><a href='https://eu.docworkspace.com/d/sIHHJ2KiNAdPlgbEG'><p>Download CV</p></a></div>
        </R2wrap>
    </R2cont>
  )
}
// https://eu.docworkspace.com/d/sIHHJ2KiNAdPlgbEG
export default Rite2

const R2cont = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-top: 10px;
`
const R2wrap = styled.div`
width: 100%;
height: 100%;
font-family: times new romans;

.skilrate{
  display: flex;
  justify-content: space-around;
}

.ceevee{
  margin: 10px 20px;
}
`