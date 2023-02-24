//Other
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Utils
import { getPokemonTypeColor } from '../utils/pokemonTypeColor'

//Components
import TagType from './TagType'

const Pokemon = ({ img, name, pokemonType }) => {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const colorType = getPokemonTypeColor(pokemonType)

  return (
    <Link to={`/search-pokemon/${name}`}>
      <PokemonDiv>
        <img style={{ height: '50%' }} src={img} />
        <p>{capitalizeFirstLetter(name)}</p>
        <TagType bgColor={colorType} type={pokemonType} />
      </PokemonDiv>
    </Link>
  )
}

const PokemonDiv = styled.div`
  height: 180px;
  width: 100%;
  background-color: purple;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
`

export default Pokemon
