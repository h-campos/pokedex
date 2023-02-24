//Other
import React from 'react'
import styled from 'styled-components'

const TagType = ({ bgColor, type }) => {
  return (
    <Tag bgColor={bgColor}>
      <Type>{type}</Type>
    </Tag>
  )
}

const Tag = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 0.3em 1em;
  text-align: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Type = styled.p`
  color: #c8d6e5;
  text-transform: uppercase;
`

export default TagType
