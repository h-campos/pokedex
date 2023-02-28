//Other
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PokemonEvolution = ({ imgPokemon }) => {
  const [listImg, setListImg] = useState([])

  useEffect(() => {
    if (imgPokemon) {
      if (imgPokemon.length === 2) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgPokemon[0]}`)
          .then((res) => res.json())
          .then((data) =>
            setListImg((curr) => [...curr, data.sprites.front_default])
          )
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgPokemon[1]}`)
          .then((res) => res.json())
          .then((data) =>
            setListImg((curr) => [...curr, data.sprites.front_default])
          )
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgPokemon[2]}`)
          .then((res) => res.json())
          .then((data) =>
            setListImg((curr) => [...curr, data.sprites.front_default])
          )
      } else if (imgPokemon.length === 1) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgPokemon[0]}`)
          .then((res) => res.json())
          .then((data) =>
            setListImg((curr) => [...curr, data.sprites.front_default])
          )
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgPokemon[1]}`)
          .then((res) => res.json())
          .then((data) =>
            setListImg((curr) => [...curr, data.sprites.front_default])
          )
      }
    }
  }, [])

  return (
    <EvolutionContainer>
      <EvolutionTitle>Evolutions</EvolutionTitle>
      <ImgContainer>
        {listImg.map((img, index) => {
          return <Img key={index} src={img} />
        })}
      </ImgContainer>
    </EvolutionContainer>
  )
}

const EvolutionContainer = styled.div`
  height: 25%;
  width: 100%;
  background-color: #393e46;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
  border: 1px solid #c8d6e5;
`

const ImgContainer = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const Img = styled.img`
  width: 25%;
`

const EvolutionTitle = styled.h4`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1rem;
  height: 20%;
`

export default PokemonEvolution
