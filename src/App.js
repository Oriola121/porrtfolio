import React from 'react'
import Main from './Main'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

function App() {
  return (
    <Appcont>
      <GlobalStyle/>
      <Main/>
    </Appcont>
  )
}

export default App

const Appcont = styled.div`
width: 100%;
height: auto;
min-height: 100vh;
`