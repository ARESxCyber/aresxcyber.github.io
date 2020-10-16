import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedNumber from '@jhonnold/react-animated-number';

const image = require('../images/ARESx_Logo.png');

const Home = () => {
    const [rank, setRank] = useState(247);
    const [rank2, setRank2] = useState(38);
    return (
        <Container>
            <Img src={image}/>
            <Title>ARESx</Title>
            <Rank>
                CTFTime Global Rank: <AnimatedNumber initial={1000} duration={2000} number={rank} component="span" format={Math.floor} fps={20} />
            </Rank>
            <Rank>
                CTFTime USA Rank: <AnimatedNumber initial={500} duration={2000} number={rank2} component="span" format={Math.floor} fps={20} />
            </Rank>
        </Container>
    )
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  text-align: center;
`;

const Rank = styled.h2`
  margin: 20px 0 0 0;
  text-transform: uppercase;
  color: #af0000;
  text-align: center;
`;

const Img = styled.img`
  width: 300px;
  margin: 0 0 20px 0;
`;

export default Home;