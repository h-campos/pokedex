//Other
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Utils
import { getPokemonTypeColor } from '../utils/pokemonTypeColor'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'
import { convertLbToKg } from '../utils/convertLbToKg'

//Icons
import {
  FaArrowLeft,
  FaBalanceScaleLeft,
  FaRulerVertical
} from 'react-icons/fa'

//Components
import TagType from '../components/TagType'
import PokemonEvolution from '../components/PokemonEvolution'
import StatsBars from '../components/StatsBars'

const Search = () => {
  const { name } = useParams()
  const [infoPokemon, setInfoPokemon] = useState()
  const [pokemonSpecies, setPokemonSpecies] = useState()
  const [evolution, setEvolution] = useState()
  const favicon = document.querySelector('#favicon')

  useEffect(() => {
    document.title = `Pokedex - ${capitalizeFirstLetter(name)}`
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setInfoPokemon(data))
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
      .then((response) => response.json())
      .then((data) => setPokemonSpecies(data))
  }, [])

  useEffect(() => {
    if (pokemonSpecies) {
      fetch(pokemonSpecies.evolution_chain.url)
        .then((response) => response.json())
        .then((data) => setEvolution(data))
    }
  }, [pokemonSpecies])

  if (infoPokemon) {
    favicon.href = infoPokemon.sprites.front_default
  }

  return (
    <SearchContainer>
      {infoPokemon && evolution ? (
        <>
          <Link to='/'>
            <FaArrowLeft
              color={'#c8d6e5'}
              size={'1.5rem'}
              style={{
                position: 'absolute',
                top: '5%',
                left: '5%',
                cursor: 'pointer',
                zIndex: '3'
              }}
            />
          </Link>
          <ColorDot
            bgColorType1={infoPokemon.types[0].type.name}
            bgColorType2={infoPokemon?.types[1]?.type?.name}
          />
          <Blur />
          <NameAndType>
            <PokemonImg src={infoPokemon.sprites.front_default} />
            <PokemonName>{infoPokemon.name}</PokemonName>
            <TypeContainer>
              {infoPokemon.types.map((element, index) => {
                return (
                  <TagType
                    key={index}
                    color={getPokemonTypeColor(element.type.name)}
                    type={element.type.name}
                  />
                )
              })}
            </TypeContainer>
          </NameAndType>
          <PokemonEvolution
            imgPokemon={[
              evolution.chain.species.name,
              evolution.chain.evolves_to[0].species.name,
              evolution.chain.evolves_to[0].evolves_to[0].species.name
            ]}
          />
          <HeightAndWeight>
            <HeightAndWeightTitle>Taille & Poids</HeightAndWeightTitle>
            <HeightAndWeightContainer>
              <Weight>
                <FaBalanceScaleLeft color={'#c8d6e5'} size={'1.8rem'} />
                {convertLbToKg(infoPokemon.weight) + ' kg'}
              </Weight>
              <Height>
                <FaRulerVertical color={'#c8d6e5'} size={'1.8rem'} />
                {infoPokemon.height + ' m'}
              </Height>
            </HeightAndWeightContainer>
          </HeightAndWeight>
          <ShinyContainer>
            <ShinyTitle>Shiny</ShinyTitle>
            <ShinyContainerImg>
              <ShinyImg src={infoPokemon.sprites.front_shiny} />
            </ShinyContainerImg>
          </ShinyContainer>
          <StatContainer>
            <StatTitle>Stats</StatTitle>
            <StatContainerBar>
              {infoPokemon.stats.map((element, index) => {
                return (
                  <StatsBars
                    name={element.stat.name}
                    progress={element.base_stat}
                    key={index}
                  />
                )
              })}
            </StatContainerBar>
          </StatContainer>
        </>
      ) : (
        <Loading>Chargement...</Loading>
      )}
    </SearchContainer>
  )
}

const shine = keyframes`
  0% {
    filter: drop-shadow(0 0 1rem #c8d6e5);
  }

  50% {
    filter: drop-shadow(0 0 1.5rem #c8d6e5);
  }

  100% {
    filter: drop-shadow(0 0 1rem #c8d6e5);
  }
`

const SearchContainer = styled.div`
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #222831;
  position: relative;
`

const ColorDot = styled.div`
  width: 200px;
  height: 180px;
  border-radius: 50%;
  background: ${(props) =>
    props.bgColorType2 === undefined
      ? getPokemonTypeColor(props.bgColorType1)
      : `linear-gradient(90deg, ${
          getPokemonTypeColor(props.bgColorType1) + ' 50%'
        }, ${getPokemonTypeColor(props.bgColorType2) + ' 50%'})`};
  position: absolute;
  left: 50%;
  top: 13%;
  transform: translateX(-50%);
  z-index: 1;
`

const Blur = styled.div`
  height: 30%;
  width: 100%;
  backdrop-filter: blur(18px);
  position: relative;
  z-index: 2;
`

const NameAndType = styled.div`
  height: 25%;
  width: 100%;
  background-color: #393e46;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  z-index: 2;
  position: relative;
  margin-bottom: 1em;
  border: 1px solid #c8d6e5;
`
const PokemonName = styled.h4`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1.4rem;
`

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const PokemonImg = styled.img`
  position: absolute;
  width: 40%;
  top: -55%;
  left: 50%;
  transform: translateX(-50%);
`

const HeightAndWeight = styled.div`
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

const HeightAndWeightTitle = styled.h4`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1rem;
  height: 20%;
`

const HeightAndWeightContainer = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
`

const Height = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
  font-size: 1.2rem;
  color: #c8d6e5;
`

const Weight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
  font-size: 1.2rem;
  color: #c8d6e5;
`

const ShinyContainer = styled.div`
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

const ShinyTitle = styled.h4`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1rem;
  height: 20%;
`

const ShinyContainerImg = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
`

const ShinyImg = styled.img`
  width: 35%;
  animation: ${shine} 1s linear infinite;
`

const StatContainer = styled.div`
  height: 55%;
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

const StatTitle = styled.h4`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1rem;
  height: 20%;
`

const StatContainerBar = styled.div`
  width: 90%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 1em;
`

const Loading = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 1.5rem;
`

export default Search
