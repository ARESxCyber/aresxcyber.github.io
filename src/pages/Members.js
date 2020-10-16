import React from 'react';
import styled from 'styled-components';

const Members = () => (
    <Container>
        <Line></Line>
        <Name>MillenniumX</Name>
        <Description>Greetings! You can call me MillenniumX, and I'm a high school student. I do bug bounty hunting, iOS development, astronomy and writing (mainly plays and poetry). I'm currently into web exploitation, but starting to learn a little about reverse engineering. I love CTFs due to their competitive yet friendly spirit, and in my free time you can find me listening to NF, Witt Lowry and Vaboh!</Description>
        
        <Line></Line>
        <Name>R3N4SCITUR</Name>
        <Description>I'm R3N4SCITUR and I'm here to learn from like minded people and have fun doing it. I have always been passionate about technology. I'm obtaining a BA in IT w/emphasis on cyber security. I enjoy CTFs because they are an almost impossible puzzle at first but as you take the time to break them down, you realize there is a solution.</Description>
        
        <Line></Line>
        <Name>noobs3c</Name>
        <Description>My name is Sofiane (aka noobs3c) and I'm a 19 year old French/Morrocan security researcher and bug hunter who lives in France. Currently, I'm a first year student in IT engineering and I hope to work in cybersecurity in the future! I'm practicing really frequently and really hard by playing multiple CTFs. I love to share resources with others!</Description>

        <Line></Line>
    </Container>
);

const Container = styled.div`
  left: 0;
  position: absolute;
  margin: 100px 30px;
  width: 50%;
`;

const Name = styled.h2`
  font-size: 30px;
  color: #af0000;
  text-justify: inter-word;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Line = styled.hr`
  border: 1px solid #af0000;
`;


export default Members;