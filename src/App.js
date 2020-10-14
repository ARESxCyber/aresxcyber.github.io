import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedNumber from '@jhonnold/react-animated-number';
import { get } from 'axios';

const TEAM_ID = '128734';

function App() {
  const [rank, setRank] = useState(247);
  const [rank2, setRank2] = useState(38);
  return (
    <Container>
      <Title>ARESx</Title>
      <Rank>
        CTFTime Global Rank: <AnimatedNumber initial={1000} duration={2000} number={rank} component="span" format={Math.floor} fps={20} />
      </Rank>
      <Rank>
        CTFTime USA Rank: <AnimatedNumber initial={500} duration={2000} number={rank2} component="span" format={Math.floor} fps={20} />
      </Rank>
      <Navigation>
        <li><a href="#">Write Ups</a></li>
        <li><a href="#">Members</a></li>
        <li><a href="#">Scores</a></li>
      </Navigation>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: red;
`;

const Title = styled.h1`
  margin: 0;
`;

const Rank = styled.h2`
  margin: 20px 0 0 0;
  text-transform: uppercase;
  color: #af0000;
`;

const Navigation = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;
  margin-top: 60px;
  padding: 0;

  li {
    margin: 0 20px;
  }

  a {
    color: inherit;
    font-size: 30px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #af0000;
  }
`;

export default App;
