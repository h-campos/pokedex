//Other
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//Icons
import { FaBars, FaSistrix } from 'react-icons/fa'

//Components
import Pokemon from '../components/Pokemon'

const Home = () => {
  const [listAllPokemon, setListAllPokemon] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const getListPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    const data = await res.json()

    const getDetails = (listPokemon) => {
      listPokemon.map(async (pokemon) => {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => res.json())
          .then((data) => setListAllPokemon((curr) => [...curr, data]))
      })
    }

    getDetails(data.results)
  }

  useEffect(() => {
    getListPokemon()
  }, [])

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
        <Input placeholder='Pikachu' />
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
      <PokemonContainer>
        {listAllPokemon.map((pokemon, index) => {
          return (
            <Pokemon
              key={index}
              img={pokemon.sprites.front_default}
              name={pokemon.name}
              pokemonType={pokemon.types[0].type.name}
            />
          )
        })}
      </PokemonContainer>
      <HidePoint />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  max-height: 100%;
  max-width: 90%;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #222831;
  position: relative;
`

const Navbar = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
  margin-top: 1em;
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
  margin-bottom: 3em;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #393e46;
  border-radius: 80px;
  border: none;
  outline: none;
  font-family: 'Tilt Neon', cursive;
  color: #c8d6e590;
  font-size: 1rem;

  &::placeholder {
    color: #c8d6e590;
    font-size: 1rem;
    padding-left: 2em;
  }
`

const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  width: 100%;
  margin-bottom: 1em;
`

const HidePoint = styled.div`
  position: absolute;
  background-color: #222831;
  width: 40px;
  height: 40px;
  top: 40%;
  left: 0%;
`

export default Home
