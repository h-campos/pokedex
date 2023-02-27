//Other
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Utils
import { getPokemonTypeColor } from '../utils/pokemonTypeColor'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

//Components
import TagType from './TagType'

const Pokemon = ({ img, name, pokemonType }) => {
  const colorType = getPokemonTypeColor(pokemonType)

  return (
    <Link to={`/search-pokemon/${name}`}>
      <PokemonDiv>
        <img style={{ height: '40%' }} src={img} />
        <PokemonName>{capitalizeFirstLetter(name)}</PokemonName>
        <TagType color={colorType} type={pokemonType} />
      </PokemonDiv>
    </Link>
  )
}

const PokemonDiv = styled.div`
  height: 180px;
  width: 100%;
  background-color: #393e46;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  gap: 1em;
`

const PokemonName = styled.p`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
`

export default Pokemon
