//Other
import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Search from './pages/Search'

const App = () => {
  return (
    <div className='App'>
      <phone-mockup model='' color='black'>
        <MainContainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search-pokemon' element={<Search />} />
          </Routes>
        </MainContainer>
      </phone-mockup>
    </div>
  )
}

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #222f3e;
`

export default App
