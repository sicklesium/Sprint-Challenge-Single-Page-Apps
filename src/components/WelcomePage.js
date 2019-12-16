import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.h1`
  color: #97D7D7;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Header>Welcome to the ultimate fan site!</Header>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className='bigLink' to={'/characters'}>Character List Here!</Link>
      </header>
    </section>
  );
}