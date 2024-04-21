import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaTwitter,FaLinkedin,FaWhatsapp,FaFacebook } from 'react-icons/fa'

function Rite3() {
  return (
    <R3cont>
        <R3wrap>
          <span>
          <a href='https://www.linkedin.com/in/abdurrahman-muhibudeen-9a0328226/' target='_blank' >
            <FaLinkedin /></a>
          <a href='https://web.facebook.com/OrigoldMuhibudeen' target='_blank' >
            <FaFacebook/></a>
          <a href='https://twitter.com/Realtor_OriGold' target='_blank' >
            <FaTwitter/></a>
          <a href='https://github.com/Oriola121' target='_blank' >
            <FaGithub/></a>
          <a href="https://wa.me/2348102557217"  rel="noopener noreferrer" target='_blank' >
            <FaWhatsapp /></a></span>
          </R3wrap>
    </R3cont>
  )
}

export default Rite3

const R3cont = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
// margin-top: 10px;
`
const R3wrap = styled.div`
width: 95%;
height: 95%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
font-family: times new romans;

span{
  width: 80%;
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

a{
  color: inherit;

:hover{
  color: gold;
    }
  }
}
// @media screen and (max-width: 860px){
//     width: 60%;
//     bottom: 0;
// }
`