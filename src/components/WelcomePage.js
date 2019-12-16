import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.h1`
  color: #97D7D7;
`;

const Centered = styled.div`
  margin: auto;
  text-align: center;
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
        <Centered><div className="links"><Link to={'/characters'}>Character List Here!</Link></div></Centered>
      </header>
    </section>
  );
}