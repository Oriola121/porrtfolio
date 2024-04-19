import React from 'react'
import styled from 'styled-components'
import { IoMdDownload } from 'react-icons/io'
import ProgressBar from "@ramonak/react-progress-bar"

function Rite2() {
  return (
    <R2cont>
        <R2wrap>
          <div className='skilrate'><p>Front-End</p>
            <ProgressBar completed={80} customLabel="80%" width='202px' height='10px' labelSize='7.5px'/>
          </div>
          <div className='skilrate'><p>Back-End</p>
            <ProgressBar completed={20} customLabel="20%" width='205px' height='10px' labelSize='7.5px'/>
          </div>
          <div className='skilrate'><p>Graphics</p>
          <ProgressBar completed={85} customLabel="85%" width='210px' height='10px' labelSize='7.5px'/>
          </div>
          <a href='https://goldceevee.tiiny.site' target='_blank' className='clink' download >
            <p>Download CV</p>
            <IoMdDownload/></a>
        </R2wrap>
    </R2cont>
  )
}
export default Rite2

const R2cont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
`
const R2wrap = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;

.skilrate{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.clink{
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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