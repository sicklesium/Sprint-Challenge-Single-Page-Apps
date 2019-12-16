import React from "react";
import styled from 'styled-components';

const CharCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const CharName = styled.h1`
  padding-bottom: 1%;
  float: left;
`;

const CharacterCard = props => {
  return (
    <CharCard>
      <CharName>{props.name}</CharName>
      <p><strong>Gender:</strong> {props.gender}</p>
      <p><strong>Species:</strong> {props.species}</p>
      <p><strong>Status...?:</strong> {props.status}</p>
    </CharCard>
  )
}

export default CharacterCard;
