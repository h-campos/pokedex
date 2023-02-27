//Other
import React from 'react'
import styled from 'styled-components'

//Utils
import { getColorProgressBar } from '../utils/getColorProgressBar'

const StatsBars = ({ name, progress }) => {
  return (
    <StatsBarsContainer>
      <StatsName>{name}</StatsName>
      <StatsBarsProgress>
        <Bars size={progress}>
          <ProgressNumber>{progress > 100 ? 100 : progress}</ProgressNumber>
        </Bars>
      </StatsBarsProgress>
    </StatsBarsContainer>
  )
}

const StatsBarsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatsName = styled.p`
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  text-transform: uppercase;
  font-size: 0.8rem;
`

const StatsBarsProgress = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bars = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 16px;
  background-color: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.size > 100 ? 100 : props.size)}%;
    height: 100%;
    background-color: ${(props) => getColorProgressBar(props.size)};
    border-radius: 16px;
  }
`

const ProgressNumber = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  color: #c8d6e5;
  font-family: 'Tilt Neon', cursive;
  font-size: 0.8rem;
`

export default StatsBars
