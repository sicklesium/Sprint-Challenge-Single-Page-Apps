import React from "react";
import styled from 'styled-components';

const CharCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border: 2px dashed #A9D3E9;
  border-radius: 25%;
  background: white;
  margin: 3%;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 3%;
`;


const CharacterCard = props => {
  return (
    <CharCard>
      <h1 className='charHeader'>{props.name}</h1>
      <p className="charPara"><strong>Gender:</strong> {props.gender}</p>
      <p className="charPara"><strong>Species:</strong> {props.species}</p>
      <p className="charPara"><strong>Status...?:</strong> {props.status}</p>
    </CharCard>
  )
}

export default CharacterCard;
