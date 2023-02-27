//Other
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import('./utils/mockup')

//Pages
import Home from './pages/Home'
import Search from './pages/Search'

const App = () => {
  return (
    <AppContainer>
      <phone-mockup model='' color='black'>
        <MainContainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search-pokemon/:name' element={<Search />} />
          </Routes>
        </MainContainer>
      </phone-mockup>
      <Credits>
        Pokedex - @Saku - 4ème Concours du serveur discord -{' '}
        <a
          style={{ color: '#c8d6e5', textDecoration: 'underline' }}
          href='https://discord.com/channels/655077317911117860/1041772720066674760/1077150811542532116'
        >
          Le Repaire du Web
        </a>
      </Credits>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  position: relative;
`

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #222831;
`

const Credits = styled.p`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1em;
  font-family: 'Tilt Neon', cursive;
  color: #c8d6e5;
  font-size: 1rem;
  min-width: 80%;
  text-align: center;
`

export default App
