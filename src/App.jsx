//Other
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

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
            <Route path='/search-pokemon/:name' element={<Search />} />
          </Routes>
        </MainContainer>
      </phone-mockup>
    </div>
  )
}

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #222831;
`

export default App
