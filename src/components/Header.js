import React from "react";
import styled from 'styled-components';

const Header1 = styled.h1`
  font-family: 'Baloo Bhai', sans-serif;
  font-size: 3rem;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <Header1 className="ui center">Rick &amp; Morty Fan Page</Header1>
    </header>
  );
}
