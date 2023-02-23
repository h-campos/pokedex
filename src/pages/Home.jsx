//Other
import React from 'react'
import styled from 'styled-components'

//Icons
import { FaBars, FaSistrix } from 'react-icons/fa'

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <HomeContainer>
      <Navbar>
        <AppTitle>Pokedex</AppTitle>
        <FaBars
          color={'#c8d6e5'}
          size={'1.5rem'}
          style={{ cursor: 'not-allowed' }}
        />
      </Navbar>
      <Question>
        Quel ✨ <i>Pokemon</i> ✨ rechercher vous ?
      </Question>
      <InputContainer onSubmit={handleSubmit}>
        <Input placeholder='Pikachu ⚡️' />
        <button type='submit'>
          <FaSistrix
            color={'#c8d6e5'}
            size={'1.5rem'}
            style={{
              position: 'absolute',
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)'
            }}
          />
        </button>
      </InputContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
`

const Navbar = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
`

const AppTitle = styled.h1`
  font-family: 'Acme', sans-serif;
  color: #c8d6e5;
  font-size: 1.5rem;
`

const Question = styled.h3`
  font-family: 'Acme', sans-serif;
  color: #c8d6e5;
  font-size: 1.6rem;
  margin-bottom: 1.5em;
`

const InputContainer = styled.form`
  width: 90%;
  height: 3.5em;
  position: relative;
  margin: 0 auto;
  display: block;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #576574;
  border-radius: 80px;
  border: none;
  outline: none;
  font-family: 'Maven Pro', sans-serif;
  color: #c8d6e590;
  font-size: 1rem;

  &::placeholder {
    color: #c8d6e590;
    font-size: 1rem;
  }
`

export default Home
