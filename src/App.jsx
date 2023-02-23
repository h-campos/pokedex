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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-pokemon' element={<Search />} />
        </Routes>
      </phone-mockup>
    </div>
  )
}

export default App
