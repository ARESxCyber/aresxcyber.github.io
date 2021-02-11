import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import AnimatedNumber from '@jhonnold/react-animated-number';
import axios from 'axios';

const image = require('../images/ARESx_Logo.png');
var updatedrank = false;

const Home = () => {

    const [rank, setRank] = useState(100);
    const [rank2, setRank2] = useState(100);
    const url = "https://ctftime.org/api/v1/teams/128734/";
    const url2 = "https://ctftime.org/team/128734";
    var updatedrank = false;

    useEffect(() => {
      axios.get(url)
        .then(response => {
          setRank(response.data.rating[0]['2021'].rating_place)
        })
    }, [url])

    if(rank!==100){
      return (
        <Container>
            <Img src={image}/>
            <Title>ARESx</Title>
            <Rank>
                CTFTime Global Rank: <AnimatedNumber initial={1000} duration={1000} number={rank} component="span" format={Math.floor} fps={20} />
            </Rank>
        </Container>
    )}
    else{
      return (
        <Container>
            <Img src={image}/>
            <Title>ARESx</Title>
            <Rank>
              Loading...
            </Rank>
        </Container>
      )
    }
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