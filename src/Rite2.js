import React from 'react'
import styled from 'styled-components'
import { IoMdDownload } from 'react-icons/io'

function Rite2() {
  return (
    <R2cont>
        <R2wrap>
          <div className='skilrate'><p>Front-End</p>
            <p>Back-End</p>
            <p>Graphics</p></div>
            <div className='ceevee'><a href='https://goldceevee.tiiny.site' target='_blank' className='clink'>
              <p>Download CV</p>
              <IoMdDownload/></a>
            </div>
        </R2wrap>
    </R2cont>
  )
}
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
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.clink{
  display: flex;
  justify-content: center;
  gap: 3px;
}

a:{
  color: #fff;
  text-decoration: none;
}
a:link{
  color: #fff;
  text-decoration: none;
}
a:visited{
  color: #fff;
  text-decoration: none;
}
a:hover{
  color: gold;
  text-decoration: none;
}
`