import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

const Centered = styled.div`
  margin: auto;
  text-align: center;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [dataIsFiltered, dataIsUpdated] = useState([])

  const searching = allcharacters => {
    dataIsUpdated(allcharacters)
  }

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        console.log('response: ', response);

        setCharacters(response.data.results)

        dataIsUpdated(response.data.results);
      })

      .catch(error => {
        console.log('You have receieved an error: ', error);
      })
  }, []);

  return (
    <section>
      <Centered><div className="links"><Link to={'/'}>Home</Link></div></Centered>
      <SearchForm searching={searching} character={characters} />
      {dataIsFiltered.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </section>
  );
}