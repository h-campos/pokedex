//Other
import React from 'react'
import styled from 'styled-components'

//Utils
import { getPokemonTypeIcon } from '../utils/pokemonTypeIcon'

const TagType = ({ color, type }) => {
  return (
    <Tag borderColor={color}>
      <Type textColor={color}>{getPokemonTypeIcon(type) + ' ' + type}</Type>
    </Tag>
  )
}

const Tag = styled.div`
  padding: 0.2em 0.8em;
  text-align: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor};
`

const Type = styled.p`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: 'Tilt Neon', cursive;
`

export default TagType
